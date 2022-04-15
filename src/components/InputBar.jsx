import React from "react";

const InputBar = ({ input, setInput }) => {
  const textHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="input-group">
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
    </div>
  );
};

export default InputBar;
