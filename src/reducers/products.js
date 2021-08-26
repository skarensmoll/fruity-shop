export const ADD_ONE_PRODUCT = 'ADD_ONE_PRODUCT';
export const CHANGE_QUANTITY_PRODUCT = 'CHANGE_QUANTITY_PRODUCT';
export const INITIALIZE_PRODUCTS = 'INITIALIZE_PRODUCTS';
export const CLEAN_PRODUCTS = 'CLEAN_PRODUCTS';

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
        ...state,
        products: newProducts,
        numProducts,
        totalSum
      }
    case INITIALIZE_PRODUCTS:
      return {
        cleanProducts: false,
        products: action.products,
        totalSum: 0,
        numProducts: 0
      }
    case CLEAN_PRODUCTS:
      return {
        ...state,
        cleanProducts: action.clean,
      }
    default:
      return state;
  }
}


export { productReducer };