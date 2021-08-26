import React, { useContext, useEffect } from "react";
import styles from "./Products.module.scss";
import { ProductContext } from "../../context/product-context";
import { ListProducts } from "../../components/Product";
import { Loading } from '../../components/UI';
import useProducts from '../../hooks/useProducts';

const Products = () => {
  const {
    products,
    addQuantityHandler,
  } = useContext(ProductContext);

  const [loading] = useProducts();

  return (
    <>
      {console.log(products)}
      {loading && <Loading />}
      {!loading &&
         <section className={styles.Products}>
         <div className={styles.Banner}></div>
         <ul className={styles.ListProducts}>
           <ListProducts
             products={products}
             onAddQuantity={(productId, quantity) => {
               addQuantityHandler(productId, quantity);
             }}
           />
         </ul>
       </section>
      }
    </>
  );
};

export default Products;
