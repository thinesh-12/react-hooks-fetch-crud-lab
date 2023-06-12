import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onQuestionDelete, onHandleUpdateAnswer }) {
  const questionsToDisplay = questions.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        onQuestionDelete={onQuestionDelete}
        onHandleUpdateAnswer={onHandleUpdateAnswer}
      ></QuestionItem>
    );
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;