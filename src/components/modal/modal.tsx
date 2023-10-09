import {useCallback, useEffect} from 'react'
import {createPortal} from 'react-dom'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import ModalOverlay from './modal-overlay/modal-overlay'

import PropTypes from 'prop-types'

import styles from './modal.module.css'
import {ModalProps} from "./modal.types";

const modalsRoot: HTMLElement | null = document.querySelector("#modal");

const Modal = ({children, closeModal, title}: ModalProps) => {
  const handleEscClose = useCallback(
    evt => {
      if (evt.key === 'Escape') {
        closeModal()
      }
    },
    [closeModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose)
    return () => document.removeEventListener('keydown', handleEscClose)
  }, [handleEscClose])

  return modalsRoot && createPortal(
    <ModalOverlay close={closeModal}>
      <div className={styles.modal__container}>
        {title && (
          <h2 className={`${styles.modal__title} text text_type_main-large`}>
            {title}
          </h2>
        )}
        <button className={styles.modal__closeButton} onClick={closeModal}>
          <CloseIcon type='primary'/>
        </button>
        {children}
      </div>
    </ModalOverlay>,
    modalsRoot
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  title: PropTypes.string,
}

export default Modal
