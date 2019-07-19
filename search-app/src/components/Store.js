import React from 'react';

export const CTX = React.createContext();

const initialState = {
  movie: [],
  keySearch: 'man'
}

const reducer = (state, action) => {

  switch(action.type){
    case 'FETCHED_DATA':
      return {...state, movie: action.movieList};
    case 'CHANGE_KEY_SEARCH':
      return {...state, keySearch: action.keySearch};
    case 'SEARCH':
      return {...state, movie: action.payload}
    default:
      throw new Error();
  }

}

export default function Store(props){

  const state = React.useReducer(reducer, initialState);

  return(
    <CTX.Provider value={state}>
      {props.children}
    </CTX.Provider>
  )

}