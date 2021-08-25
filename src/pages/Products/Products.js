import React, { useContext, useEffect } from "react";
import styles from "./Products.module.scss";
import { ProductContext } from "../../context/product-context";
import { ListProducts } from "../../components/Product";
import { useHttp, HTTP_VERBS, API } from "../../hooks/useHttp";
import { Loading } from '../../components/UI';

const Products = () => {
  const {
    products,
    addQuantityHandler,
    initializeProducts,
  } = useContext(ProductContext);

  const [loading, sendRequest] = useHttp();

  useEffect(() => {
    sendRequest(HTTP_VERBS.GET, API.FRUITS).then(products => {
      initializeProducts(products);
    })
  }, [sendRequest, initializeProducts])

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
