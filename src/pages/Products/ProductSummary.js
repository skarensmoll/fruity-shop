import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Dialog, Button } from '../../components/UI';
import styles from './ProductSummary.module.scss';

const ProductSummaryContent = ({ products, totalSum, onAddNum, onClose }) => {
  const productIds = Object.keys(products);

  const listProductsCards = productIds.map(prodId => {
    const product = products[prodId];
    return (
      <div className={styles.ProductCard}
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
            onClick={() => { onAddNum(prodId, -1) }}>-</Button>
          <Button className={styles.ProductCard__btn}
            onClick={() => { onAddNum(prodId, 1) }}>+</Button>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.ProductSummary}>
      {listProductsCards}
      <div className={styles.ProductSummary__total}>
        <h3 className={styles.ProductSummary__label}>Total Amount:</h3>
        <h3 className={styles.ProductSummary__amount}>{`${totalSum} €`}</h3>
        <div className={styles.ProductSummary__total__controls}>
          <button className={styles.ProductSummary__btn}
            onClick={() => { onClose() }}>Close</button>
          <button className={styles.ProductSummary__btn}>Order</button>
        </div>
      </div>
    </div>
  );
};

const ProductSummary = (props) => {
  const { showSummaryProds, onShowSummaryProds } = useContext(ProductContext);
  return (
    <>
      {showSummaryProds &&
        <Dialog onBackDropClicked={() => onShowSummaryProds(false)}>
          <ProductSummaryContent {...props} onClose={() => { onShowSummaryProds(false) }} />
        </Dialog>
      }
    </>
  )
}

export default ProductSummary;