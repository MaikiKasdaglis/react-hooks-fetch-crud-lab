import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, remove, updateState}) {
  console.log(`form QL`, questions)
 

  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
    {questions.map((question) => <QuestionItem updateState={updateState} remove={remove} key={question.id} question={question}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;

