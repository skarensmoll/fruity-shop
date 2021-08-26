import { ProductContext } from './product-context';
import React, { useReducer, useState, useCallback} from 'react';

import {
  productReducer,
  CHANGE_QUANTITY_PRODUCT,
  INITIALIZE_PRODUCTS,
  CLEAN_PRODUCTS
} from '../reducers/products';

const GlobalContext = ({ children }) => {

  const [showSummary, setShowSummary] = useState(false);

  const [productState, productDispatcher] =
    useReducer(productReducer, {});
  const { products,
    numProducts,
    totalSum,
    cleanProducts } = productState;

  const quantityDispatcher = (productId, quantity) => {
    productDispatcher({ type: CHANGE_QUANTITY_PRODUCT, productId, quantity });
  }

  const initializeProdsDispatcher = (products) => {
    productDispatcher({ type: INITIALIZE_PRODUCTS, products })
  };

  const cleanProductsDispatcher = (clean) => {
    productDispatcher( { type: CLEAN_PRODUCTS, clean})
  }

  return (
    <ProductContext.Provider value={{
      numProducts: numProducts,
      totalSum: totalSum,
      products: products,
      showSummaryProds: showSummary,
      cleanProducts: cleanProducts,
      onCleanProducts: useCallback((...args) => cleanProductsDispatcher(...args), []),
      onShowSummaryProds: useCallback(() => setShowSummary(prev => !prev), []),
      addQuantityHandler: useCallback((...args) => quantityDispatcher(...args), []),
      initializeProducts: useCallback((...args) => initializeProdsDispatcher(...args), [])
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default GlobalContext;