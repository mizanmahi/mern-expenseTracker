import React, { createContext, useReducer } from 'react';

import { AppReducer } from './AppReducer';

const InitialState = {
  transaction: [],
};

// creating context
export const GlobalContext = createContext();

// context provider component
export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  return (
    <GlobalContext.Provider
      value={{ transaction: state.transaction, dispatch }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
