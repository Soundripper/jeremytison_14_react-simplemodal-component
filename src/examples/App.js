import React from "react";
import { PopUpModalComponent } from "../lib/components/PopUpComponent";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
          setOpen(true);
    }

    return (
      <div style={{ width: 640, margin: "15px auto" }}>
        <button 
        onClick={() => openPopup()}
        className="popupButton">Popup</button>
        <div>
            <PopUpModalComponent openModal={open} useFade={true} text="Popup text!" closePopup={() => setOpen(false)} />
        </div>
      </div>
    )
  ;
}
export default App;