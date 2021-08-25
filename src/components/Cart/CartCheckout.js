import React, { useContext, useState, useEffect } from "react";
import { Dialog, Loading } from "../UI";
import { ProductContext } from "../../context/product-context";
import { useHttp, HTTP_VERBS, API } from "../../hooks/useHttp";
import ProductCart from "../../components/ProductCart/ProductCart";
import { OrderForm } from "../../components/Product";

const CART_STEPS = {
  summary: 1,
  orderingForm: 2,
  orderSuccessful: 3,
};

const CartCheckout = () => {
  const {
    showSummaryProds,
    totalSum,
    products,
    addQuantityHandler,
    onShowSummaryProds,
  } = useContext(ProductContext);

  const [currentStep, setCurrentStep] = useState(CART_STEPS.summary);
  const [loading, sendRequest] = useHttp();

  const handleOrderSubmission = (orderData) => {
    sendRequest(HTTP_VERBS.POST, API.ORDERS, {
      id: Math.random(),
      orderData,
      totalSum,
      products
    }).then(res => {
      setCurrentStep(CART_STEPS.orderSuccessful);
      setTimeout(() => {
        onShowSummaryProds(false);
      }, 600)
    });
  };

  useEffect(() => {
    if (showSummaryProds) {
      setCurrentStep(CART_STEPS.summary);
    }

    console.log("use effect ");

    return () => {
      console.log("destroing this useEffect");
    };
  }, [showSummaryProds]);

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
            onOrder={() => {
              setCurrentStep(CART_STEPS.orderingForm);
            }}
          />
        );
      case CART_STEPS.orderingForm:
        return (
          <OrderForm
            onSubmit={(orderData) => {
              handleOrderSubmission(orderData);
            }}
          />
        );
      case CART_STEPS.orderSuccessful:
        return (
          <div>
            <h3>Your order has placed!</h3>
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {showSummaryProds && (
        <Dialog onBackDropClicked={() => onShowSummaryProds(false)}>
          {loading && <Loading />}
          {!loading && showStepFactory(currentStep)}
        </Dialog>
      )}
    </React.Fragment>
  );
};

export default CartCheckout;
