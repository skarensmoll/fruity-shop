import React from 'react';

const ProductContext = React.createContext({
  numProducts: 0,
  onChangeNumProducts: ()=>{}
});

export {ProductContext}

