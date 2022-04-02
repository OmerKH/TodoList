import React, { useEffect, useState } from "react";
import ToDoList from "./TodoList";
import Priority from "./priority";

const Form = () => {
  // State
  const [input, setInput] = useState("");
  const [toDo, setToDo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filtered, setFiltered] = useState([]);

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

  const textHandler = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setToDo([
      ...toDo,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <input
          onChange={textHandler}
          type="text"
          className="todo-input"
          placeholder="Add Task"
          value={input}
        />
        <button className="todo-button" type="submit">
          Submit
        </button>
      </form>
      <ToDoList toDo={toDo} setToDo={setToDo} filtered={filtered} />
    </div>
  );
};
export default Form;
