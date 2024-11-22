import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  students: [{ id: 1, idNo: "22DIT011", fname: "DHRUV", lname: "DADHANIA", phone: 1234567890},
  { id: 2, idNo: "22DIT013", fname: "BHARGAV", lname: "DUNGRANI", phone: 1234567890 },
  { id: 3, idNo: "22DIT041", fname: "HARSH", lname: "PARSANIYA", phone: 1234567890 }]
}
export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <StudentContext.Provider value={{
      students: state.students
    }}>
      {props.children}
    </StudentContext.Provider>
  )
}