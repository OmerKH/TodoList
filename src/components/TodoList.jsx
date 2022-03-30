import React from "react";
import Task from "./Task";

const ToDoList = ({ toDo, setToDo, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((task) => (
          <Task
            toDo={toDo}
            task={task}
            setToDo={setToDo}
            text={task.text}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
