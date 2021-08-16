import React, { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import ShoppingCartLogo from '../../icons/ShoppingCart.svg';
import styles from './CartSummary.module.scss';

const CartSummary = () => {
  const { numProducts, onShowSummaryProds } = useContext(ProductContext);
  return (
    <div className={styles.CartSummary}
      onClick={() => onShowSummaryProds(true)}>
      <img className={styles.CartSummary__img} src={ShoppingCartLogo} alt='Shopping Cart Logo' />
      <span className={styles.CartSummary__title}>Your Cart</span>
      <span className={styles.CartSummary__value}>{numProducts}</span>
    </div>
  )
}

export default CartSummary;