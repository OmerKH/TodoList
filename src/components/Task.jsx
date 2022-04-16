import React, { useState } from "react";
import Form from "./Form";
// import Priority from "./priority";

const Task = ({ text, toDo, setToDo, task, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const handleDelete = () => {
    setToDo(toDo.filter((e) => e.id !== task.id));
  };

  const handleDone = () => {
    setToDo(
      toDo.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="choise">
      <section className="todo">
        <li className={`todo-item ${task.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={handleDone} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={handleDelete} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
        <button
          className="high-btn"
          onClick={() => setEdit({ id: task.id, value: task.text })}
        >
          <i className="fa fa-bars"></i>
        </button>
      </section>
    </div>
  );
};

export default Task;
