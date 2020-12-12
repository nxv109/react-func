import { all, call, put, takeLatest } from 'redux-saga/effects';

function* addTodo() {
  console.log('saga: addTodo');
}

export default function* todosSagas() {
  yield all([
    takeLatest('ADD_TODO', addTodo)
  ])
}