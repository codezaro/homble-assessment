import React, { useEffect, useState, useRef } from "react";
import { postRequest } from "../axios.js";
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [allergen, setAllergen] = useState("");

  function handleSubmit() {
    const productData = { name, description, allergen };
    postRequest("/products", productData)
      .then((response) => {
        const data = response.data;
        console.log(response);
        onClose();
      })
      .catch((error) => {
        console.log("Product not added:", error);
      });
  }

  function onClose() {
    setIsModalOpen(false);
  }
  if (!isModalOpen) {
    return null;
  }
  return (
    // <div className="wrap_modal">
    //   <div onClick={(e) => e.stopPropagation()} className="content">
    //     <div className="head_er">
    //       <span
    //         onClick={onClose}
    //         className={
    //           isModalOpen ? "close_modal-icon" : "close_modal-icon hide"
    //         }
    //       >
    //         &times;
    //       </span>
    //     </div>
    //     <div className="body">
    //       <div className="input_field">
    //         <label htmlFor="name">Name:</label>
    //         <input
    //           type="text"
    //           name="name"
    //           id="name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //           onClick={(e) => e.stopPropagation()}
    //           placeholder="Enter name of the product..."
    //         />
    //       </div>
    //       <div className="input_field">
    //         <label htmlFor="about">About:</label>
    //         <input
    //           type="text"
    //           id="about"
    //           name="description"
    //           value={description}
    //           onChange={(e) => setDescription(e.target.value)}
    //           onClick={(e) => e.stopPropagation()}
    //           placeholder="Enter description of the product..."
    //         />
    //       </div>
    //       <div className="input_field">
    //         <label htmlFor="allergy">Allergen:</label>
    //         <input
    //           type="text"
    //           id="allergy"
    //           name="allergen"
    //           value={allergen}
    //           onChange={(e) => setAllergen(e.target.value)}
    //           onClick={(e) => e.stopPropagation()}
    //           placeholder="Enter allergen related to the product..."
    //         />
    //       </div>
    //     </div>

    //     <button onClick={handleSubmit} className="add_button">
    //       Add
    //     </button>
    //   </div>
    // </div>

    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="input_field">
            <label htmlFor="about">About:</label>
            <input
              type="text"
              id="about"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              // onClick={(e) => e.stopPropagation()}
              placeholder="Enter description of the product..."
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalComponent;
