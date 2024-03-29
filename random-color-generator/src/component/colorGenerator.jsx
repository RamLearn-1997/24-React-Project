import { useEffect, useState } from "react";
import "./style.css";

export default function colorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // this function will recieve the length of random color
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // to create hex color we need to create array of hex
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    //create for loop that will add Array hex to variable hexColor until loop end
    for (let i = 0; i < 6; i++) {
      // adding hex to the hexColor at every loop
      hexColor += hex[randomColorUtility(hex.length)];
    }

    // setting hexcolor to useState of setColor
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    // multiply the red, green and blue color with 256(which is maximum value)
    const red = randomColorUtility(256);
    const green = randomColorUtility(256);
    const blue = randomColorUtility(256);

    setColor(`rgb(${red},${green},${blue})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div className="button-container">
        <button onClick={() => setTypeOfColor("hex")}>
          create a hex color
        </button>
        <button onClick={() => setTypeOfColor("rgb")}>
          create a rgb color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }>
          Generate random color
        </button>
      </div>
      <div
        style={{
          width: "70vw",
          background: color,
          borderRadius: "10px",
        }}
        className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#ebe9e9",
            fontSize: "30px",
            marginTop: "50px",
            padding: "190px",
          }}>
          <p>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</p>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}
