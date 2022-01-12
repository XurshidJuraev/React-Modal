import React from "react"; 
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Bu yerda Modaldegi so'zlar yozilgan</h1>
        </div>
        <div className="body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto vero accusamus ipsam, porro quo?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Ortga
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;