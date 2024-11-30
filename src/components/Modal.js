// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // If the modal is not open, render nothing

  // Close the modal when clicking outside of the modal content
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content">
        <button className="close" onClick={onClose}>&times;</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
