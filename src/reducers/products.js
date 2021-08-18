export const ADD_ONE_PRODUCT = 'ADD_ONE_PRODUCT';
export const CHANGE_QUANTITY_PRODUCT = 'CHANGE_QUANTITY_PRODUCT';

const productReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_QUANTITY_PRODUCT:
      const productIds = Object.keys(state.products);
      let numProducts = 0;
      let totalSum = 0;

      const newProducts =   {
        ...state.products,
        [action.productId]: {
          ...state.products[action.productId],
          quantity: action.quantity
        }
      };

      productIds.forEach(p => {
        const product = newProducts[p];

        numProducts += product.quantity;
        totalSum += product.quantity * product.price;
      });

      return {
        products: newProducts,
        numProducts,
        totalSum
      }

    default:
      return state;
  }
}

export const initialListProducts = {
  products: {
    [Math.random()]: {
      title: 'Apple',
      description: 'Juicy Apple',
      price: 34,
      quantity: 0
    },
    [Math.random()]: {
      title: 'Pear',
      description: 'Fresh and green Pear',
      price: 20,
      quantity: 0
    },
    [Math.random()]: {
      title: 'Grape',
      description: 'Several grapes',
      price: 5,
      quantity: 0
    }
  },
  totalSum: 0,
  numProducts: 0
};

export { productReducer };