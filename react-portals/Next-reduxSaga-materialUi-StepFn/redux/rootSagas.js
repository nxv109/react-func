import { all, call } from 'redux-saga/effects';

import todosSagas from './todos/sagas';

export default function* rootSagas() {
  yield all([call(todosSagas)]);
}
