import React from "react"
import "./PopUpComponent.css";
const PopUpModalComponent = ({ text, closePopup, useFade = false, open }) => {
if (!open) {
  return null;
}
  return (
    <div className={useFade ? " popup-container popup-fade" : "popup-container"}>
     <div className="popup-body">
      <h2>{text}</h2>
      <button onClick={closePopup} className="popClosebutton">X</button>
     </div>
    </div>
  );
};

export default PopUpModalComponent