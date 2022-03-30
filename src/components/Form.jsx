import React from "react";

const Form = ({ setInput, input, toDo, setToDo, setStatus }) => {
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
    <form onSubmit={handleSubmit}>
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
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
