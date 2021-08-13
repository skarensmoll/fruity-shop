import React from 'react';
import styles from './Input.module.scss';

const Input = ({ value, label, id, onChange }) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} type="text" onChange={onChange} />
    </div>
  )
}

export default Input;