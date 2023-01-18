import React from "react";
import PopUpModalComponent from "../lib/components/PopUpComponent";
import { useState } from "react";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const openPopup = () => {
    setOpenModal(true);
  }

  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <button 
      onClick={() => openPopup()}
      className="popupButton">Popup</button>
      <div>
          {<PopUpModalComponent
          myPopupBodyStyle={{borderRadius: "10px", backgroundColor: 'rgba(246, 162, 179, 0.8)',}}
          myPopupContainerStyle={{backgroundColor: "rgba(40, 40, 40, 0.5)"}}
          myPopupCloseButtonStyle={{backgroundColor: "rgba(200, 40, 40, 1)", borderRadius: "50px", position:"absolute", right: "-10px", top:"-10px"}}
          fadeanimduration="2s"
          openModal={openModal}
          text={'popUp'}
          closePopup={() => setOpenModal(false)}
          />}
      </div>
    </div>
  )
}
export default App;