const initialState = {products: [], total: 0};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      let totalPrice = state.products.reduce((total, item) => {
        return total += item.amount ? item.amount * item.price : item.price;
      }, 0);

      return { ...state, products: action.payload, total: totalPrice };
    case "RESET":
      return { ...state, products: action.payload, total: 0 };
    default:
      return state;
  }
}
