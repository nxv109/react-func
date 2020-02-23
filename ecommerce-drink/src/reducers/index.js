import { combineReducers } from 'redux';
import messageReducer from './message.reducer';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import orderReducer from './order.reducer';

const allReducers = combineReducers({
  message: messageReducer,
  users: userReducer,
  cart: cartReducer,
  order: orderReducer
});

export default allReducers;
