import React, { useContext } from "react";
import styles from "./Products.module.scss";
import { ProductContext } from "../../context/product-context";
import { ListProducts } from "../../components/Product";
import { useHttp } from "../../hooks/useHttp";


const Products = () => {
  const {
    products,
    addQuantityHandler,
  } = useContext(ProductContext);

  const [loading, sendRequest] = useHttp();

  return (
    <>
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

    </>
  );
};

export default Products;
