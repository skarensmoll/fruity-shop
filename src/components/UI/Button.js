import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, children, className, disabled }) => {
  const classes = `${styles.Button} ${className ? className : ''}`;
  return (
    <button className={classes}
      onClick={onClick}
      disabled={ disabled === true ? 'disabled' : '' }>
      {children} {disabled}
    </button>
  )
}

export default Button;