import { createContext, useReducer, useContext } from "react";
import AppReducer from "./AppReducer";
import { StudentContext } from "./StudentContext";

export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {
  // Call useContext inside the function component
  const { students } = useContext(StudentContext);

  const initialState = {
    userinfo: students.map((student) => ({
      id: student.id,
      Id_number: student.idNo,
      skills: [
        { name: "Memership Quality", percent: "100" },
        { name: "Good Communication", percent: "100" },
        { name: "Problem Solving", percent: "90" },
      ],
      languages: [
        { name: "React", percent: "99" },
        { name: "Redux", percent: "80" },
        { name: "Node", percent: "60" },
      ],
      CGPA: "",
      DOB: "",
      address: "",
      description: "",
    })),
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <UserInfoContext.Provider
      value={{
        userinfo: state.userinfo,
      }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};
