import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/TodoList";

function App() {
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

  return (
    <div className="App">
      <header>
        <h1>Task List</h1>
      </header>
      <Form
        setInput={setInput}
        input={input}
        toDo={toDo}
        setToDo={setToDo}
        setStatus={setStatus}
      />
      <ToDoList toDo={toDo} setToDo={setToDo} filtered={filtered} />
    </div>
  );
}

export default App;
