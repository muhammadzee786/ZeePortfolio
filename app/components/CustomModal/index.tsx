import React from 'react';
import styles from './Modal.module.css'
import { XCircle } from 'lucide-react'

const CustomModal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay}`}>
      <div className={`${styles.modalContent}`}>
        <span className={`${styles.closeButton}`} onClick={onClose}>
          <XCircle />
        </span>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;