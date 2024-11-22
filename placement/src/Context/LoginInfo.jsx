// import { createContext, useReducer } from "react";
// import AppReducer from "./AppReducer";

// const initialState = {
//   login: [{ id: 1, idNo: "22dit011", fname: "Dhruv", lname: "Dadhania", email: "dhruvdadhania9@gmail.com" }]
// }
// export const LoginInfo = createContext();

// export const LoginInfoProvider = (props) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)

//   return (
//     <LoginInfo.Provider value={{ login : state.login }}>
//       {props.children}
//     </LoginInfo.Provider>
//   )
// }

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state with hardcoded default login info
const initialState = {
  login: [{ id: 1, idNo: "22dit011", fname: "Dhruv", lname: "Dadhania", email: "dhruvdadhania9@gmail.com" }],
};

// Create context
export const LoginInfo = createContext();

// Context provider
export const LoginInfoProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Add a function to update login info
  const updateLogin = (newLoginInfo) => {
    dispatch({ type: "UPDATE_LOGIN", payload: newLoginInfo });
  };

  return (
    <LoginInfo.Provider value={{ login: state.login, updateLogin }}>
      {props.children}
    </LoginInfo.Provider>
  );
};
