import React, { useReducer, useContext, useEffect } from 'react';
import styles from './Products.module.scss';
import ProductCard from '../../components/Product/ProductCard';
import {
  productReducer,
  initialListProducts,
  CHANGE_QUANTITY_PRODUCT,
  ADD_ONE_PRODUCT
} from '../../reducers/products';
import { ProductContext } from '../../context/product-context';
import ProductCart from '../../components/ProductCart/ProductCart';


const Products = () => {
  const [productState, productDispatcher] =
    useReducer(productReducer, initialListProducts);
  const { products, totalSum } = productState;

  const { onChangeNumProducts } = useContext(ProductContext)

  useEffect(() => {
    onChangeNumProducts(totalSum);
  }, [totalSum, onChangeNumProducts])

  const changeQuantityHandler = (productId, quantity) => {
    productDispatcher({ type: CHANGE_QUANTITY_PRODUCT, productId, quantity });
  }

  const addOneProductHandler = (productId, quantity) => {
    productDispatcher({ type: ADD_ONE_PRODUCT, productId, quantity });
  }


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
          addOneProductHandler(productId, quantity);
        }} />
    </>
  )
}

export default Products;

