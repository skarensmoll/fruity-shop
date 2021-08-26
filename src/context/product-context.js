import React from 'react';

const ProductContext = React.createContext({
  numProducts: 0,
  totalSum: 0,
  products: {},
  showSummaryProds: false,
  cleanProducts: true,
  onCleanProducts: () => {},
  onShowSummaryProds: () => {},
  addQuantityHandler: () => {},
  initializeProducts: () => {},
});

export { ProductContext }

