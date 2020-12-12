import { combineReducers } from 'redux'

import todos from './todos/reducer';

const rootReducers = combineReducers({
  todos
})

export default rootReducers;