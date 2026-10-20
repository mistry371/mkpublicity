import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('');

  const openModal = (serviceName = '') => {
    if (typeof serviceName === 'string') {
      setModalService(serviceName);
    } else {
      setModalService('');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalService('');
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalService, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

