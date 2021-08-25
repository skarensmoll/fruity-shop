import React from 'react';
import { Control, Button } from '../UI';
import useControl from '../../hooks/useControl';
import styles from './OrderForm.module.scss';


// TODO Create generic component form
const OrderForm = ({ onSubmit }) => {

  const handleSubmission = (e) => {
    e.preventDefault();

    onSubmit({
      name: nameValue,
      address: addressValue,
      email: emailValue,
    });
  }

  const [
    nameValue,
    nameValid,
    nameTouched,
    onNameChange,
    onNameBlur,
  ] = useControl('', (value) => value.trim() !== '');

  const [
    addressValue,
    addressValid,
    addressTouched,
    onAddressChange,
    onAddressBlur,
  ] = useControl('', (value) => value.trim() !== '');

  const [
    emailValue,
    emailValid,
    emailTouched,
    onEmailChange,
    onEmailBlur,
  ] = useControl('', (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));


  const validForm = nameValid && emailValid && addressValid;

  return (
    <form className={styles.OrderForm} onSubmit={handleSubmission}>
      <Control
        id="name"
        label="Name"
        onChange={onNameChange}
        value={nameValue}
        valid={nameValid}
        onBlur={onNameBlur}
        touched={nameTouched}
        onInvalidMsg="Please enter a valid name" />

      <Control
        id="email"
        label="Email"
        onChange={onEmailChange}
        value={emailValue}
        valid={emailValid}
        onBlur={onEmailBlur}
        touched={emailTouched}
        onInvalidMsg="Please enter a valid email" />

      <Control
        id="address"
        label="Address"
        onChange={onAddressChange}
        value={addressValue}
        valid={addressValid}
        touched={addressTouched}
        onBlur={onAddressBlur}
        onInvalidMsg="Please enter a valid Address" />
      <Button type="submit" disabled={ !validForm } >Send Order</Button>
    </form>
  )
}

export default OrderForm;