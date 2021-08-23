import React, { useContext, useState } from "react";
import styles from "./Products.module.scss";

import { ProductContext } from "../../context/product-context";
import ProductCart from "../../components/ProductCart/ProductCart";
import { Dialog } from "../../components/UI";
import { ListProducts, OrderForm } from "../../components/Product";

import useHttp from'../../hooks/useHttp';


const CART_STEPS = {
  summary: 1,
  orderingForm: 2,
};

const Products = () => {
  const {
    products,
    totalSum,
    addQuantityHandler,
    showSummaryProds,
    onShowSummaryProds,
  } = useContext(ProductContext);

  const [currentStep, setCurrentStep] = useState(CART_STEPS.summary);

  const [loading, sendRequest] = useHttp();

  const handleOrderSubmission = (orderData) => {
    sendRequest('POST', {
      id: Math.random(),
      orderData,
      totalSum
    })
  }

  const showStepFactory = (step) => {
    switch (step) {
      case CART_STEPS.summary:
        return (
          <ProductCart
            products={products}
            totalSum={totalSum}
            onAddNum={(productId, quantity) => {
              addQuantityHandler(productId, quantity);
            }}
            onOrder={()=> { setCurrentStep(CART_STEPS.orderingForm) }} />
        )
      case CART_STEPS.orderingForm:
        return (<OrderForm onSubmit={(orderData)=> { handleOrderSubmission(orderData)  }}/>)
      default:
        return null;
    }
  }

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
      {showSummaryProds && (
        <Dialog onBackDropClicked={() => onShowSummaryProds(false)}>
          {showStepFactory(currentStep)}
        </Dialog>
      )}
    </>
  );
};

export default Products;
