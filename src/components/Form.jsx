import React, { useState } from "react";
// import ToDoList from "./TodoList";
import Selector from "./Selector";
import InputBar from "./InputBar";

const Form = ({ toDo, status, setToDo, setStatus, onSubmit }) => {
  // State
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      text: input,
      completed: false,
      id: Math.random() * 1000,
      p: "REGULAR",
    });
    setInput("");
  };

  return (
    <React.Fragment>
      <header className="head">
        <h1>My Tasks</h1>
      </header>
      <form onSubmit={handleSubmit} className="task-form">
        <React.Fragment>
          <Selector toDo={toDo} setToDo={setToDo} setStatus={setStatus} />
          <InputBar input={input} setInput={setInput} />
        </React.Fragment>
      </form>
    </React.Fragment>
  );
};
export default Form;
