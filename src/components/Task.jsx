import React from "react";

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
    <div className="todo">
      <li className={`todo-item ${task.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={handleDone} className="complete-btn">
        V
      </button>
      <button onClick={handleDelete} className="trash-btn">
        X
      </button>
    </div>
  );
};

export default Task;
