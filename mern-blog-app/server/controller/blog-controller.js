const mongoose = require("mongoose");

const Blog = require("../model/Blog");

//Fetch lists of Blog
//add a new Blog
//delete a Blog
//update a Blog

const fetchListOfBlog = async (req,res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }

  if (!blogList) {
    return res.status(404).json({ message: "No Blog Found" });
  }
  return res.status(200).json({ blogList });
};

const addNewBlog = async (req,res) => {
  const { title, description } = req.body;

  const currentDate = new Date();

  const newlyCreatedBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreatedBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlyCreatedBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.send(500).json({ message: e });
  }
  return res.status(200).json({ newlyCreatedBlog });
};

const deleteABlog = async ( req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not Found" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Unable to delete ! please try again" });
  }
};

const updateABlog = async (req, res) => {
  const id = req.params.id;

  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);

    return res
      .status(500)
      .json({
        message: "Something Went Wrong while Updating ! please try again",
      });
  }

  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "Unable to Update" });
  }
  return res.status(200).json({ currentBlogToUpdate });
};

module.exports = { fetchListOfBlog, addNewBlog, deleteABlog, updateABlog };
