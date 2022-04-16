import React, { useState } from "react";
// import ToDoList from "./TodoList";
import InputBar from "./InputBar";

const Form = ({ toDo, status, setToDo, setStatus, onSubmit, edit }) => {
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
      <form onSubmit={handleSubmit} className="task-form">
        <React.Fragment>
          <InputBar input={input} setInput={setInput} edit={edit} />
        </React.Fragment>
      </form>
    </React.Fragment>
  );
};
export default Form;
