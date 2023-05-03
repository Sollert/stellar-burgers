import styles from './modal.module.css';

import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({ children, closeModal, title }) => {
  const handleEscClose = useCallback(
    (evt) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [handleEscClose]);

  return createPortal(
    <ModalOverlay close={closeModal}>
      <div className={styles.modal__container}>
        {title && <h2 className={`${styles.modal__title} text text_type_main-large`}>{title}</h2>}
        <button className={styles.modal__closeButton} onClick={closeModal}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </ModalOverlay>,
    document.querySelector('#modal')
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  closeModal: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
