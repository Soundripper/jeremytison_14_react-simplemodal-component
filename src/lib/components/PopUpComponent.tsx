import * as React from "React"
import "./PopUpComponent.css";
export const PopUpModalComponent = ({ text, closePopup, useFade = false, open } : {text : string, closePopup : any, useFade?: boolean, open: boolean}) => {
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