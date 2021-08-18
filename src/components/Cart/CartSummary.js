import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/product-context';
import ShoppingCartLogo from '../../icons/ShoppingCart.svg';
import styles from './CartSummary.module.scss';


const CartSummary = () => {
  const { numProducts, onShowSummaryProds } = useContext(ProductContext);
  const [cartClass, setCartClass] = useState(`${styles.CartSummary}`)

  useEffect(() => {
    setCartClass(`${styles.CartSummary} ${styles.CartSummary__bump}`);
    const timeOut =  setTimeout(()=> {
      setCartClass(`${styles.CartSummary}`);
    }, 300);

    return () => { clearTimeout(timeOut) }
  }, [numProducts])

  return (
    <div className={cartClass}
      onClick={() => onShowSummaryProds(true)}>
      <img className={styles.CartSummary__img} src={ShoppingCartLogo} alt='Shopping Cart Logo' />
      <span className={styles.CartSummary__title}>Your Cart</span>
      <span className={styles.CartSummary__value}>{numProducts}</span>
    </div>
  )
}

export default CartSummary;