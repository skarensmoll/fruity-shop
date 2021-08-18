import { ProductContext } from './product-context';
import React, { useReducer, useState } from 'react';
import {
  productReducer,
  initialListProducts,
  CHANGE_QUANTITY_PRODUCT
} from '../reducers/products';

const GlobalContext = ({ children }) => {

  const [showSummary, setShowSummary] = useState(false);

  const [productState, productDispatcher] =
    useReducer(productReducer, initialListProducts);

  const { products,
          numProducts,
          totalSum } = productState;

  const quantityDispatcher = (productId, quantity) => {
    productDispatcher({ type: CHANGE_QUANTITY_PRODUCT, productId, quantity });
  }

  return (
    <ProductContext.Provider value={{
      numProducts: numProducts,
      totalSum: totalSum,
      products: products,
      showSummaryProds: showSummary,
      onShowSummaryProds: () => { setShowSummary(prev => !prev) },
      addQuantityHandler: (...args) => { quantityDispatcher(...args) }
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default GlobalContext;