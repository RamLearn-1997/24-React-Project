import { useState } from "react";
import data from "./data";
import './main.css';

export default function AccordianMulti() {
  const [expandedItems, setExpandedItems] = useState([]);

  // Finding difficulty in creating this function
  function handleMultipleSelection(currentId) {
    setExpandedItems(prevExpandedItems => {
      const isExpanded = prevExpandedItems.includes(currentId);
      if (isExpanded) {
        // Remove id from the array
        return prevExpandedItems.filter(id => id !== currentId);
      } else {
        // Add id to the array
        return [...prevExpandedItems, currentId];
      }
    });
  }

  // Function to dynamically generate the style for rotation
  const rotateStyle = (id) => ({
    display: 'inline-block',
    transform: expandedItems.includes(id) ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.5s ease", // Smooth transition for rotation
  });

  return (
    <div className="wrapper1">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() => handleMultipleSelection(dataItem.id)}
                className="title">
                <h3>{dataItem.question}</h3>
                <span style={rotateStyle(dataItem.id)}>&#11206;</span>
              </div>
              {expandedItems.includes(dataItem.id) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found!</div>
        )}
      </div>
    </div>
  );
}
