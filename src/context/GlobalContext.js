import { ProductContext } from './product-context';
import React, { useState } from 'react';

const GlobalContext = ({ children }) => {
  const [numProducts, setNumProducts] = useState(0);
  const [showSummaryProds, setShowSummaryProds] = useState(false);

  return (
    <ProductContext.Provider value={{
      numProducts: numProducts,
      showSummaryProds: showSummaryProds,
      onShowSummaryProds: (value) => setShowSummaryProds(value),
      onChangeNumProducts: (quantity) => { setNumProducts(quantity) }
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default GlobalContext;