import React from "react";
import "./PopUpComponent.css";
import useEscape from "../hooks/useEscape"
export const PopUpModalComponent = ({ text, useFade = false, openModal, closePopup}) => {
  useEscape(closePopup);

  if (!openModal) {
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

// export default PopUpModalComponent