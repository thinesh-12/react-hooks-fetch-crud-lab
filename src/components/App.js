import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((r) => r.json())
      .then((questions) => setQuestions(questions));
  }, []);

  function handleUpdateAnswer(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  function onNewQuestionSubmit(questionObj) {
    setQuestions([...questions, questionObj]);
  }

  function onQuestionDelete(deletedQuestion) {
    const updatedQuestions = questions.filter(
      (ques) => ques.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onNewQuestionSubmit={onNewQuestionSubmit} />
      ) : (
        <QuestionList
          questions={questions}
          onQuestionDelete={onQuestionDelete}
          onHandleUpdateAnswer={handleUpdateAnswer}
        />
      )}
    </main>
  );
}

export default App;