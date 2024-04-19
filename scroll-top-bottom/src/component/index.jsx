import useFetch from "../../../three-custom-hook/src/use-fetch";
import {useRef} from "react";

export default function ScrollToptoBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({
        behavior:'smooth'
    })
  } 

  if (error) {
    return <h3>Error Occurred. Please Try again</h3>;
  }

  if (pending) {
    return <h3>Data is loading ! please wait</h3>;
  }

  return (
    <div>
      <h1>Scroll Top to Bottom</h1>
      <h3>This is Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is Bottom Section</h3>
    </div>
  );
}


// you similarly create scroll to particular section  by using useRef hook