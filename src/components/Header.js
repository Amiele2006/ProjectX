import React, { useState } from 'react';
import Modal from './ModalComponent'; // Import the Modal component
import ProjectX from '../assets/images/Frame 8.png';
import Cancel from "../assets/icons/multiply.png";
import hamburger from '../assets/icons/primary.png';
// import Dropdown from "../components/Dropdown";

function Header(){

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

   return(
        <header className="flex justify-between content-center w-full p-7 pr-4" id="header-x" >
            <img src={ProjectX} alt="logo" id="projectx"/>
            <div>
              <button onClick={openModal}><img src={hamburger} alt="hamburger open"/></button>

              {/* Modal Component */}
              <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal Title">
                <p>This is some content inside the modal.</p>
                <button onClick={closeModal}><img src={Cancel} alt="hamburger close"/></button>
              </Modal>
            </div>
        </header>
    )
}

export default Header;