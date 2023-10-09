import styles from './modal-overlay.module.css'
import {SyntheticEvent} from "react";
import {ModalOverlayProps} from "./modal-overlay.types";

const ModalOverlay = ({children, close}: ModalOverlayProps) => {
  const handleClose = (evt: SyntheticEvent) => {
    if (evt.target === evt.currentTarget) {
      close()
    }
  }

  return (
    <div className={styles.overlay} onClick={handleClose}>
      {children}
    </div>
  )
}

export default ModalOverlay
