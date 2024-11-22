import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
 questions : [
    {
      id: 1,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "A man got Rs. 130 less, as simple interest, when he invested Rs. 2000 for 4 years as compared to investing Rs. 2250 for the same duration. What is the rate of interest?",
      options: ["2%", "3%", "4%", "5%"],
      correctAnswer: "5%",
    },
    {
      id: 2,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "A sum of Rs. 12,000 is borrowed at a rate of 10% compounded annually. What will be the compound interest at the end of 2 years?",
      options: ["Rs. 2520", "Rs. 2400", "Rs. 2600", "Rs. 2800"],
      correctAnswer: "Rs. 2520",
    },
    {
      id: 3,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "If a train runs at 60 km/h, how long will it take to cover 300 km?",
      options: ["3 hours", "4 hours", "5 hours", "6 hours"],
      correctAnswer: "5 hours",
    },
    {
      id: 4,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "A shopkeeper buys an article for Rs. 500 and sells it for Rs. 600. What is the percentage profit?",
      options: ["15%", "20%", "25%", "30%"],
      correctAnswer: "20%",
    },
    {
      id: 5,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "The average of five consecutive odd numbers is 25. What is the largest number?",
      options: ["27", "29", "31", "33"],
      correctAnswer: "29",
    },
    {
      id: 6,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "In how many years will Rs. 1500 amount to Rs. 1800 at 10% simple interest per annum?",
      options: ["2 years", "3 years", "4 years", "5 years"],
      correctAnswer: "2 years",
    },
    {
      id: 7,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "The ratio of the ages of two persons is 4:5. After 5 years, the ratio will be 5:6. What is the present age of the younger person?",
      options: ["20 years", "25 years", "30 years", "35 years"],
      correctAnswer: "20 years",
    },
    {
      id: 8,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "A person can row 5 km upstream in 40 minutes and 10 km downstream in 30 minutes. What is the speed of the stream?",
      options: ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
      correctAnswer: "2 km/h",
    },
    {
      id: 9,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "The sum of the first 10 natural numbers is:",
      options: ["45", "55", "65", "75"],
      correctAnswer: "55",
    },
    {
      id: 10,
      title: "Aptitude Test",
      starttime: "12:00",
      endtime: "12:30",
      mark: 1,
      question: "What is the value of 2^5?",
      options: ["16", "32", "64", "128"],
      correctAnswer: "32",
    },
  ]
  
}
export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <QuestionContext.Provider value={{
      questions: state.questions
    }}>
      {props.children}
    </QuestionContext.Provider>
  )
}