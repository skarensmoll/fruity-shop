import React, { useReducer, useContext, useEffect } from 'react';
import styles from './Products.module.scss';
import ProductCard from '../../components/ProductCard';
import {
  productReducer,
  initialListProducts,
  CHANGE_QUANTITY_PRODUCT
} from '../../reducers/products';
import { ProductContext } from '../../context/ProductContext';


const Products = () => {
  const [productState, productDispatcher] = useReducer(productReducer, initialListProducts);
  const { onChangeNumProducts } = useContext(ProductContext)
  let sumProducts = 0;

  const changeQuantityHandler = (productId, quantity) => {
    productDispatcher({ type: CHANGE_QUANTITY_PRODUCT, productId, quantity });
  }

  useEffect(() => { onChangeNumProducts(sumProducts); })

  const listProductCards = () => {
    console.log('listing products')
    const productIds = Object.keys(productState);

    const productCards = productIds.map(id => {
      const product = productState[id];
      sumProducts += product.quantity;

      return (
        <ProductCard
          key={id}
          id={id}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          onAdd={ (productId, quantity)=> changeQuantityHandler(productId, quantity) }
        />
      )
    })

    return productCards;
  }

  console.log('running render');
  return (
    <div className={styles.Products}>
      <div className={styles.Banner}>
      </div>
      <div className={styles.ListProducts}>
        {listProductCards()}
      </div>
    </div>
  )
}

export default Products;

