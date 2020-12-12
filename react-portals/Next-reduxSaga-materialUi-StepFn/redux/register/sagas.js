import { all, call, put, takeLatest } from 'redux-saga/effects';

function* step1() {
  console.log('saga: addStep1');
}

export default function* step1Sagas() {
  yield all([
    takeLatest('ADD_STEP1', step1)
  ])
}