import PropTypes from 'prop-types'

import styles from './modal-overlay.module.css'

const ModalOverlay = ({ children, close }) => {
	const handleClose = evt => {
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

ModalOverlay.propTypes = {
	children: PropTypes.node,
	close: PropTypes.func,
}

export default ModalOverlay
