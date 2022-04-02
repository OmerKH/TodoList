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
        <i class="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Task;
