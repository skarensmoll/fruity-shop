export const ADD_ONE_PRODUCT = 'ADD_ONE_PRODUCT';
export const CHANGE_QUANTITY_PRODUCT = 'CHANGE_QUANTITY_PRODUCT';

const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE_PRODUCT:
      const productToUpdate = { ...state[action.productId] };
      productToUpdate.quantity += 1;

      return {
        ...state,
        [action.productId]: {
          ...productToUpdate
        }
      };
    case CHANGE_QUANTITY_PRODUCT:
      return {
        ...state,
        [action.productId]: {
          ...state[action.productId],
          quantity: action.quantity
        }
      }
    default:
      return state;
  }
}

export const initialListProducts = {
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
};

export { productReducer };