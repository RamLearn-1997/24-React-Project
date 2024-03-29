// creating a reusable  component

import { useState } from "react";
import data from "./data";
import './main.css'

export default function AccordianSingle() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Function to dynamically generate the style for rotation
  const rotateStyle = (id) => ({
    display: 'inline-block',
    transform: selected === id ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.5s ease" // Smooth transition for rotation
    
  });


  return (
    <div className="wrapper1">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title">
                <h3>{dataItem.question}</h3>
                <span style={rotateStyle(dataItem.id)}>&#11206;</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found !</div>
        )}
      </div>
    </div>
  );
}
