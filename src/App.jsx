import React, { useState } from "react";
import "./App.scss";
import Modal from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Salom ko'proq malumot olish uchun Modal tugmasini bosing</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Modal
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;