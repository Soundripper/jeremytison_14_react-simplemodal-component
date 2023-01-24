# react-simplemodal-component
A simple react modal popUp.
MIT licence.

## Installation

```
npm install react-simplemodal-component
```

## example and props:
You can override any of the default css properties in the component props (look at the js code example below)

- 'myPopupContainerStyle' is the page blocker that contains the modal (the background under the modal). Clicking on the blocker will close the modal.
- 'myPopupBodyStyle' styles the modal.
- 'myPopupCloseButtonStyle' is here to place and style the close button of the modal.
- 'fadeanimduration' will determine the duration of the fade in animation (set it to 0 to disable the fading transition)

- 'openModal' is required in the props, it is initialized in the state openModal.
- 'text' is a string that will define the content of the modal.
- 'closePopup' is required, it will fire the function when you close the modal.

- Place the openPopup function on the button (onClick={() => openPopup()}) that will open the modal.

- Pressing the escape key on your keyboard will close the modal.

```js
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
          <PopUpModalComponent
          myPopupBodyStyle={{borderRadius: "10px", backgroundColor: 'rgba(246, 162, 179, 0.8)'}}
          myPopupContainerStyle={{backgroundColor: "rgba(40, 40, 40, 0.5)"}}
          myPopupCloseButtonStyle={{backgroundColor: "rgba(200, 40, 40, 1)", borderRadius: "50px", position:"absolute", right: "-10px", top:"-10px"}}
          fadeanimduration="2s"
          openModal={openModal}
          text={'popUp'}
          closePopup={() => setOpenModal(false)}
          />
      </div>
    </div>
  )
}
export default App;
```

## default css :

```css
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
```