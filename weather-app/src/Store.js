import React, { createContext, useReducer } from "react";

export const CTX = createContext();
const initialState = {
  city: "hanoi",
  weather: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return { ...state, weather: action.payload };
    case "CHANGE_CITY":
      return { ...state, city: action.payload };
    default:
      throw new Error();
  }
};

export default function Store({ children }) {
  const state = useReducer(reducer, initialState);
  return <CTX.Provider value={state}>{children}</CTX.Provider>;
}
