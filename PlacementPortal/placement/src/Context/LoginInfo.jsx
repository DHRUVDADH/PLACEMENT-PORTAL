import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  login: [{ id: 1, idNo: "22dit011", fname: "Dhruv", lname: "Dadhania", email: "dhruvdadhania9@gmail.com" }]
}
export const LoginInfo = createContext();

export const LoginInfoProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <LoginInfo.Provider value={{ login : state.login }}>
      {props.children}
    </LoginInfo.Provider>
  )
}
