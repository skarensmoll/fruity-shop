export const ADD_ONE_PRODUCT = 'ADD_ONE_PRODUCT';
export const CHANGE_QUANTITY_PRODUCT = 'CHANGE_QUANTITY_PRODUCT';

const updateTotalSum = (state, productId, quantity) => {
  const prod = state.products[productId];
  let preTotalSum = state.totalSum - prod.quantity;
  return preTotalSum + quantity;
}

const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE_PRODUCT:
      const productToUpdate = { ...state.products[action.productId] };
      productToUpdate.quantity += action.quantity;

      const newProds = {
        ...state.products,
        [action.productId]: {
          ...productToUpdate
        }
      };

      return {
        products: {
          ...newProds
        },
        totalSum: state.totalSum + action.quantity
      };
    case CHANGE_QUANTITY_PRODUCT:
      return {
        products: {
          ...state.products,
          [action.productId]: {
            ...state.products[action.productId],
            quantity: action.quantity
          }
        },
        totalSum: updateTotalSum(state, action.productId, action.quantity)
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
      quantity: 1
    },
    [Math.random()]: {
      title: 'Grape',
      description: 'Several grapes',
      price: 5,
      quantity: 2
    }
  },
  totalSum: 3
};

export { productReducer };