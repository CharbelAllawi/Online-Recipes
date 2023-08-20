import React from 'react';
import './style.css';
import RecipeForm from '../RecipeForm';

const Modal = ({ choice, data, isOpen, onClose }) => {


  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={onClose}>
                &times;
              </span>
              <div className="h1div">
              </div>
              <RecipeForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
