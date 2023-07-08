import React, {useState} from "react";

function QuestionItem({ question, remove, updateState }) {
  const { id, prompt, answers, correctIndex } = question;



  // const options = answers.map((answer, index) => (
  //     <option key={index} value={index}>
  //         {answer}
  //     </option>
  //     ));

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function patchFunction(e, id) {
    let value = e.target.value

    fetch(`http://localhost:3000/questions/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({correctIndex: parseInt(value, 10)})
    })
    .then(r => r.json())
    .then(d => updateState(d))
    
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={e => patchFunction(e, id)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => remove(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
