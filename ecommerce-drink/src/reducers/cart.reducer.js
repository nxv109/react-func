const initialState = { data: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART':
      return {...state, data: action.payload}
    default:
      return state;
  }
};

export default cartReducer;
