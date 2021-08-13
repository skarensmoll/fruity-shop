import {ProductContext} from './ProductContext';
import React, {useState} from 'react';

const GlobalContext = ({children})=> {
  const [numProducts, setNumProducts] = useState(0)

  return (
    <ProductContext.Provider value={{
      numProducts: numProducts,
      onChangeNumProducts: (quantity)=> { setNumProducts(quantity) }}
      }>
      {children}
    </ProductContext.Provider>
  )
}

export default GlobalContext;