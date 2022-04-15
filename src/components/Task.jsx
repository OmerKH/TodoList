import React from "react";
// import Priority from "./priority";

const Task = ({ text, toDo, setToDo, task, key }) => {
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

  const handlestat = () => {
    setToDo(
      toDo.map((item) => {
        item.p = "HIGH";
        return item;
      })
    );
  };

  return (
    <div className="choise">
      <section className="todo">
        <button onClick={handleDone} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <li className={`todo-item ${task.completed ? "completed" : ""}`}>
          {text}
        </li>
        <button onClick={handleDelete} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </section>
      <button className="high-btn" onClick={handlestat}>
        <i className="fa fa-circle"></i>
      </button>
      {/* <Priority task={task} toDo={toDo} setToDo={setToDo} /> */}
    </div>
  );
};

export default Task;
