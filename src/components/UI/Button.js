import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, children, className }) => {
  return (
    <button className={`${styles.Button} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;