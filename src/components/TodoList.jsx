import React, { useState, useEffect } from "react";
import Form from "./Form";
import Task from "./Task";
import Selector from "./Selector";

const ToDoList = () => {
  // State
  const [toDo, setToDo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filtered, setFiltered] = useState([]);
  const [lable, setLable] = useState("REGULAR");

  //Effect-1
  useEffect(() => {
    localGet();
  }, []);

  //Effect-2
  useEffect(() => {
    localStore();
    handleSwitch();
  }, [toDo, status]);

  //Storage
  const localStore = () => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  };

  const localGet = () => {
    if (localStorage.getItem("toDo") === null) {
      localStorage.setItem("toDo", JSON.stringify([]));
    } else {
      let storage = JSON.parse(localStorage.getItem("toDo"));
      setToDo(storage);
    }
  };

  //Function
  const handleSwitch = () => {
    switch (status) {
      case "completed":
        setFiltered(toDo.filter((task) => task.completed === true));
        break;
      case "uncompleted":
        setFiltered(toDo.filter((task) => task.completed === false));
        break;
      default:
        setFiltered(toDo);
        break;
    }
  };

  const updateTask = (taskId, newVlaue) => {
    if (!newVlaue.text || /^\s*$/.test(newVlaue.text)) {
      return;
    }

    setToDo((prev) =>
      prev.map((item) => (item.id === taskId ? newVlaue : item))
    );
  };

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...toDo];

    setToDo(newTasks);
  };

  return (
    <div>
      <header className="head">
        <h1>My Tasks</h1>
        <Selector
          className="select"
          toDo={toDo}
          setToDo={setToDo}
          setStatus={setStatus}
        />
      </header>
      <Form
        toDo={toDo}
        setToDo={setToDo}
        status={status}
        setStatus={setStatus}
        onSubmit={addTask}
      />
      <div className="todo-container">
        <ul className="todo-list">
          {filtered.map((task) => (
            <Task
              toDo={toDo}
              task={task}
              setToDo={setToDo}
              text={task.text}
              key={task.id}
              lable={task.p}
              setLable={setLable}
              updateTask={updateTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
