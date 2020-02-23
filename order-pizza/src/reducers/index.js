import { combineReducers } from 'redux';

import orderReducer from './order.reducer';

const allReducers = combineReducers({
  orders: orderReducer
});

export default allReducers;
