# simple-component-library

A library of React components created using [`create-component-lib`](https://www.npmjs.com/package/create-component-lib).

Learn more: https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b

## Installation

```
npm install simple-component-library
```

## default css :
.popup-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
}
.popup-body {
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 200px;
    max-width: 30%;
    bottom: 20%;
    text-align: center;
    margin: auto;
    padding-left : 13px;
    padding-right : 13px;
    border-radius: 15px;
    border-color: black;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.popClosebutton{
    margin-left: 10px;
    cursor: pointer;
}

## example:

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
          myPopupBodyStyle={{borderRadius: "10px", backgroundColor: 'rgba(246, 162, 179, 0.8)'}}
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

