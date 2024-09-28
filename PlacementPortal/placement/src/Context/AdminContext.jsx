import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  admins: [{ id: 1,designation: "HOD-IT", name: "PQR" },
  { id: 2,designation: "Professor-IT", name: "ABC" },
  { id: 3,designation: "Student-IT", name: "XYZ" }]
}
export const AdminContext = createContext();

export const AdminProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AdminContext.Provider value={{
      admins: state.admins
    }}>
      {props.children}
    </AdminContext.Provider>
  )
}