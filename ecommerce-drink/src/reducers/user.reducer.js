const initialState = {data: null, role: 0};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return {...state, data: action.payload}
    case 'STORE_ROLE':
      return {...state, role: action.payload}
    default:
      return state;
  }
};

export default messageReducer;
