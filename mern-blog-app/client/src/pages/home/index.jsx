import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./styles.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  async function fetchListOfBlog() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs/");
    const result = await response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/blogs/delete/${getCurrentId}`
      );
      const result = response.data;

      if (result?.message) {
        fetchListOfBlog();
      }
    } catch (error) {
      console.log("Error deleting blog:", error);
      // Handle error here (e.g., show a notification to the user)
    }
  }

  function handleEdit(getCurrentBlogItem) {
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListOfBlog();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog List</h1>
      {pending ? (
        <h4>Blog is Loading ! please wait</h4>
      ) : (
        <div className={classes.blogList}>
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div key={blogItem._id}>
                <h3>{blogItem.title}</h3>
                <p>{blogItem.description}</p>
                <div className={classes.flexO}>
                  <FaTrash
                    className={classes.f1}
                    onClick={() => handleDeleteBlog(blogItem._id)}
                    size={20}
                  />
                  <FaEdit className={classes.f2} onClick={() => handleEdit(blogItem)} size={20} />
                </div>
              </div>
            ))
          ) : (
            <h3>No Blogs Added </h3>
          )}
        </div>
      )}
    </div>
  );
}
