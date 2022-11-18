const initialState = {
  products: [],
  product: {},
}
// eslint-disable-next-line 
export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload.data,
      }
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload.data,
      }
    case 'GET_PRODUCT':
      return {
        ...state,
        product: action.payload,
      }
    case 'GET_SIZES':
      return {
        ...state,
        sizes: action.payload.data,
      }
    default:
      return state
  }
}
