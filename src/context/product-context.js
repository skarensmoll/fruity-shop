import React from 'react';

const ProductContext = React.createContext({
  numProducts: 0,
  showSummaryProds: false,
  onChangeNumProducts: () => { },
  onShowSummaryProds: () => { }
});

export { ProductContext }

