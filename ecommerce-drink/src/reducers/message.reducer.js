const initialState = {text: "", isMessage: false};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MESSAGE':
      return {...state, text: action.payload}
    default:
      return state;
  }
};

export default messageReducer;
