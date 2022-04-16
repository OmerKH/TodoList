import React from "react";

const InputBar = ({ input, setInput, edit }) => {
  const textHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="input-group">
      {edit ? (
        <React.Fragment>
          <input
            onChange={textHandler}
            type="text"
            className="todo-input"
            placeholder="Add Task"
            value={input}
          />
          <button className="todo-button" type="submit">
            Update
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
};

export default InputBar;
