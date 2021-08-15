import React, { useReducer, useContext, useEffect } from 'react';
import styles from './Products.module.scss';
import ProductCard from '../../components/ProductCard';
import {
  productReducer,
  initialListProducts,
  CHANGE_QUANTITY_PRODUCT,
  ADD_ONE_PRODUCT
} from '../../reducers/products';
import { ProductContext } from '../../context/ProductContext';
import ProductSummary from './ProductSummary';


const Products = () => {
  const [productState, productDispatcher] =
    useReducer(productReducer, initialListProducts);
  const { products, totalSum } = productState;

  const { onChangeNumProducts } = useContext(ProductContext)

  const changeQuantityHandler = (productId, quantity) => {
    productDispatcher({ type: CHANGE_QUANTITY_PRODUCT, productId, quantity });
  }

  const addOneProductHandler = (productId, quantity) => {
    productDispatcher({ type: ADD_ONE_PRODUCT, productId, quantity });
  }


  const listProductCards = () => {
    console.log('listing products', products)
    const productIds = Object.keys(products);
    onChangeNumProducts(totalSum);

    const productCards = productIds.map(id => {
      const product = products[id];
      return (
        <ProductCard
          key={id}
          id={id}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          onAdd={(productId, quantity) => {
            changeQuantityHandler(productId, quantity)
          }}
        />
      )
    })

    return productCards;
  }

  return (
    <>
      {console.log('rendering productsummary module')}
      <div className={styles.Products}>
        <div className={styles.Banner}>
        </div>
        <div className={styles.ListProducts}>
          {listProductCards()}
        </div>
      </div>
      <ProductSummary products={products}
        totalSum={totalSum}
        onAddNum={(productId, quantity) => { addOneProductHandler(productId, quantity); }} />
    </>
  )
}

export default Products;

