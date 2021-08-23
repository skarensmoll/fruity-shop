import React from "react";
import styles from "./Control.module.scss";

const Control = ({
  id,
  type,
  label,
  onChange,
  onBlur,
  value,
  valid,
  touched,
  onInvalidMsg,
}) => {
  return (
    <div className={ `${styles.Control} ${ (touched && !valid) && styles['Control--invalid']}`  }>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
      <p>{onInvalidMsg}</p>
    </div>
  );
};

export default Control;
