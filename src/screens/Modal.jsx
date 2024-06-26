import React, { useState, useRef } from "react";
import { postRequest } from "../axios.js";
import "./Modal.css";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [allergen, setAllergen] = useState("");

  function handleSubmit() {
    if (!name || !description || !allergen) {
      alert("All fields are required");
      return;
    }
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
    <div className="wrap_modal">
      <div onClick={(e) => e.stopPropagation()} className="content">
        <div className="head_er">
          <span onClick={onClose} className={`${isModalOpen} ? "" : "hide"`}>
            <span class="material-symbols-outlined">close</span>
          </span>
        </div>
        <div className="body">
          <div className="input_field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name of the product..."
            />
          </div>
          <div className="input_field">
            <label htmlFor="about">About:</label>
            <input
              type="text"
              id="about"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description of the product..."
            />
          </div>
          <div className="input_field">
            <label htmlFor="allergy">Allergen:</label>
            <input
              type="text"
              id="allergy"
              name="allergen"
              value={allergen}
              onChange={(e) => setAllergen(e.target.value)}
              placeholder="Enter allergen related to the product..."
            />
          </div>
        </div>

        <button
          style={{
            paddingBottom: "28px",
          }}
          onClick={handleSubmit}
          className="add_button"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Modal;
