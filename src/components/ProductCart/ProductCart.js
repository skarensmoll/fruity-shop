import React, { useContext } from 'react';
import { ProductContext } from '../../context/product-context';
import styles from './ProductCart.module.scss';
import { Button } from '../UI';

const ProductCard = ({ products, totalSum, onAddNum, onOrder }) => {
  const { onShowSummaryProds } = useContext(ProductContext);
  const productIds = Object.keys(products);

  const listProductsCards = productIds.map(prodId => {
    const product = products[prodId];
    return (
      <li className={styles.ProductCard}
        key={prodId}>
        <div className={styles.ProductCard__description}>
          <h3>{product.title}</h3>
          <div className={styles.ProductCard__values}>
            <span className={styles.ProductCard__price}>
              {`${product.price} €`}
            </span>
            <span className={styles.ProductCard__quantity}>
              {`x ${product.quantity}`}
            </span>
          </div>
        </div>
        <div className={styles.ProductCard__controls}>
          <Button className={styles.ProductCard__btn}
            onClick={() => { onAddNum(prodId,  product.quantity - 1) }}>-</Button>
          <Button className={styles.ProductCard__btn}
            onClick={() => { onAddNum(prodId, product.quantity + 1) }}>+</Button>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.ProductSummary}>
      <ul>{listProductsCards}</ul>
      <div className={styles.ProductSummary__total}>
        <h3 className={styles.ProductSummary__label}>Total Amount:</h3>
        <h3 className={styles.ProductSummary__amount}>{`${totalSum} €`}</h3>
        <div className={styles.ProductSummary__total__controls}>
          <button className={styles.ProductSummary__btn}
            onClick={() => { onShowSummaryProds(false) }}>Close</button>
          <button onClick={onOrder} className={styles.ProductSummary__btn}>Order</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;