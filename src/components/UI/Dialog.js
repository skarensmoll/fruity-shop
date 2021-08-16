import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Dialog.module.scss';


const ModalContainer = ({ children, onBackDropClicked }) => {
  return (
    <>
      <div className={styles.Dialog__content}>
        {children}
      </div>
      <div onClick={onBackDropClicked} className={styles.Backdrop} />
    </>
  )
}

const Dialog = ({ children, onBackDropClicked }) => {
  return ReactDOM.createPortal(
    <ModalContainer onBackDropClicked={onBackDropClicked}>
      {children}
    </ModalContainer>,
    document.getElementById('dialog-content')
  )
}

export default Dialog;