import React, { useState, useEffect} from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/questions')
    .then((r) => r.json())
    .then((d) => setQuestions(d))
  },[])

  function addNewObj(newObj) {
    console.log(`from parent`, newObj)
    setQuestions([...questions, newObj])
  }
function remove(id){
  console.log(`yay, i was called from the button`, id )
  let newNew = questions.filter((question) => question.id !== id)
  setQuestions(newNew)
  fetch(`http://localhost:3000/questions/${id}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
function updateState(d) {
  console.log(`this werks?`, d)
 questions.map((question) => question.id !== d.id ? question : d)
}

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addNewObj={addNewObj} /> : <QuestionList updateState={updateState} remove={remove} questions={questions} />}
    </main>
  );
}

export default App;
