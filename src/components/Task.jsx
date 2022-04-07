import React from "react";
import Priority from "./priority";

const Task = ({ text, toDo, setToDo, task }) => {
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
        <Priority task={task} toDo={toDo} setToDo={setToDo} />
      </section>
    </div>
  );
};

export default Task;
