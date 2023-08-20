import React, { useEffect, useState } from 'react';
import Modal from '../../components/Modal/index';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalChoice, setModalChoice] = useState('');
  const [modalData, setModalData] = useState(null);
  const navigation = useNavigate();

  function closeModal() {
    setIsModalOpen(false);
    navigation("/landing");

  }

 

  return (
    <>

      <Modal choice={modalChoice} data={modalData} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default AddRecipe;
