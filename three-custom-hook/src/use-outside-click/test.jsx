import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, ()=> setShowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
            <h1>This is random content</h1>
            <p>please click outside to close this. It won't close if you click inside of this content</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
