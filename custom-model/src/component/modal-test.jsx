import { useState } from "react";
import Modal from "./modal";
import Imgpic from '../assets/main.svg';
import '../App.css'

export default function ModalTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div className="btn-center">
      <img className="imgpic" src={Imgpic} alt="profilepic" /><button  onClick={handleToggleModalPopup}>Jimmy Curtis</button>
      {showModelPopup && (
        <Modal onClose={onClose} 
        id={'custom-id'}
         />
      )}
    </div>
  );
}
