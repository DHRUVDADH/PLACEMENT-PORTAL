import React, { useContext, useState, useEffect } from 'react';
import s from './Quiz.module.css';
import { QuestionContext } from "../../Context/QuestionContext";
import Navbar from '../../Components/Navbar/Navbar';

const Quiz = () => {
  const { questions } = useContext(QuestionContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);
  const [showAllAnswers, setShowAllAnswers] = useState(false); // New state for "View Answers"
  let result = "";

  useEffect(() => {
    const total = questions.reduce((acc, question) => acc + question.mark, 0);
    setTotalMarks(total);
  }, [questions]);

  // Handle the user's answer selection and store it in the selectedAnswers array
  const handleAnswerOptionClick = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  // Reset the quiz
  // const handleRestartQuiz = () => {
  //   setCurrentQuestionIndex(0);
  //   setSelectedAnswers(Array(questions.length).fill(null));
  //   setScore(0);
  //   setShowScore(false);
  //   setShowAllAnswers(false); // Reset the "View Answers" state
  // };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Handle "View Answers" button click
  const handleViewAnswers = () => {
    setShowAllAnswers(true); // Show all answers after clicking the button
  };

  // Determine result based on the score
  if (score > 0.8 * totalMarks) {
    result = "Excellent";
  } else if (score > 0.6 * totalMarks) {
    result = "Outstanding";
  } else if (score > 0.4 * totalMarks) {
    result = "Satisfactory";
  } else if (score > 0.2 * totalMarks) {
    result = "Unsatisfactory";
  } else {
    result = "Poor";
  }

  return (
    <div className={s.container}>
      <div className={s.cont1}>
        <Navbar></Navbar>
      </div>
      <div className={s.cont2}>
        {showScore && !showAllAnswers ? (
          <div className={s.scoreContainer}>
            <div className={s.first}>
              Your score is <span style={{ color: score > 0.5 * totalMarks ? "#c5d86d" : "#ff6361" }}>{result}</span>
            </div>
            <div className={s.second}>
              <div className={s.up}>{score}</div>
              <div className={s.down}>out of {totalMarks}</div>
            </div>
            <button className={s.viewAnswersButton} onClick={handleViewAnswers}>View Answers</button>
          </div>
        ) : showAllAnswers ? (
          <div className={s.allAnswersContainer}>
            <h2>Review Your Answers</h2>
            <div className={s.questionTitle}>{questions[0].title}</div>
            <div className={s.questionIndividual}>
              {questions.map((question, questionIndex) => (
                <div key={questionIndex} className={s.questionReview}>
                  <div className={s.questionUpper}>
                    <div className={s.questionNo}>Q{question.id}.</div>
                    <div className={s.questionText}>{question.question}</div>
                  </div>
                  {question.options.map((option, key) => (
                    <div key={key} className={s.optionContainer}>
                      <label
                        style={{
                          color: option === question.correctAnswer
                            ? 'green' // Highlight correct answer
                            : option === selectedAnswers[questionIndex] && option !== question.correctAnswer
                              ? 'red' // Highlight incorrect answer in red
                              : 'black', // Default color
                          border: option === question.correctAnswer ?
                            "1px solid #7FFF00"
                            : "none"
                        }}
                      >
                        <input
                          type="radio"
                          name={`question_${questionIndex}`}
                          value={option}
                          checked={selectedAnswers[questionIndex] === option}
                          readOnly // Make the inputs read-only when reviewing answers
                          className={s.radioButton}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className={s.left}>
              <div className={s.item1}>
                <div className={s.sub1}>{questions[currentQuestionIndex].title}</div>
                <div className={s.sub2}>
                  Time: {questions[currentQuestionIndex].starttime} to {questions[currentQuestionIndex].endtime}
                </div>
                <div className={s.sub3}>Total: {totalMarks}</div>
              </div>
              <div className={s.item2}>
                <div className={s.sub1}>Question {questions[currentQuestionIndex].id}</div>
                <div className={s.sub2}>{questions[currentQuestionIndex].question}</div>
                <div className={s.sub3}>
                  {questions[currentQuestionIndex].options.map((option, key) => (
                    <div key={key} className={s.optionContainer}>
                      <label>
                        <input
                          type="radio"
                          name={`question_${currentQuestionIndex}`}
                          value={option}
                          checked={selectedAnswers[currentQuestionIndex] === option}
                          onChange={() => handleAnswerOptionClick(option)}
                          className={s.radioButton}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <div className={s.sub4}>
                  <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswers[currentQuestionIndex] === null}
                  >
                    {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                  </button>
                </div>
              </div>
            </div>
            <div className={s.right}>
              <div className={s.item3}>
                <div className={s.heading}>Question Navigator</div>
                <div className={s.buttons}>
                  {questions.map((question, key) => (
                    <button
                      key={key}
                      onClick={() => handleQuestionNavigation(key)}
                      className={currentQuestionIndex === key ? s.activeNavButton : s.navButton}
                    >
                      Q{key + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
