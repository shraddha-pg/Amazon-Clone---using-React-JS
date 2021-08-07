import React, {createContext, useContext, useReducer} from "react";
//Prepare Data Layers 
export const StateContext = createContext();
//Wrap our App 
export const StateProvider = ({reducer, initialState, children}) => (
<StateContext.Provider value={useReducer(reducer, initialState)} > {children}</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
