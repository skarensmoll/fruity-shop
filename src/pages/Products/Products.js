import React, { useContext } from 'react';
import styles from './Products.module.scss';
import ProductCard from '../../components/Product/ProductCard';

import { ProductContext } from '../../context/product-context';
import ProductCart from '../../components/ProductCart/ProductCart';


const Products = () => {

  const { products,
          totalSum,
          addQuantityHandler
        } = useContext(ProductContext);

  const listProductCards = () => {
    const productIds = Object.keys(products);

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
            addQuantityHandler(productId, quantity);
          }}
        />
      )
    })

    return productCards;
  }

  return (
    <>
      {console.log('rendering productsummary module')}
      <section className={styles.Products}>
        <div className={styles.Banner}>
        </div>
        <ul className={styles.ListProducts}>
          {listProductCards()}
        </ul>
      </section>
      <ProductCart
        products={products}
        totalSum={totalSum}
        onAddNum={(productId, quantity) => {
          addQuantityHandler(productId, quantity);
        }} />
    </>
  )
}

export default Products;

