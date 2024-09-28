import { createContext , useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  companies: [
    {id: 1 ,name: "CREST SOLUTIONS" ,email: "creatsolutions@gmail.com" ,phone: 1234567890},
    {id: 2 ,name: "TCS" ,email: "tcs@gmail.com" ,phone: 1234567890},
    {id: 3 ,name: "MEDITAB" ,email: "meditab@gmail.com" ,phone: 1234567890},
  ]
}

export const CompanyContext = createContext()

export const CompanyProvider = ( props ) =>{
  const [state , dispatch] = useReducer(AppReducer , initialState)

  return(
    <CompanyContext.Provider value={{
      companies : state.companies
    }}>
      {props.children}
    </CompanyContext.Provider>
  )
}