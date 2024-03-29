import QRCode from "react-qr-code";
import "../App.css";
import { useState } from "react";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div className="input-and-button">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="qr-code"
          placeholder="Enter Your value over here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}>
          Generate
        </button>
      </div>
      <div className="qr-container">
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={300}
          bgColor="#fff0ff"
        />
      </div>
    </div>
  );
}
