import React, { useEffect, useState } from "react";

const Priority = ({ toDo }) => {
  const [lable, setLable] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    handleLable();
    console.log("hi");
  }, [toDo]);

  const handlePriority = (e) => {
    setLable(e.target.value);
  };

  const handleLable = () => {
    switch (lable) {
      case "HIGH":
        setCategory(toDo.filter((task) => (task.p = "HIGH")));
        break;
      case "REGULAR":
        setCategory(toDo.filter((task) => (task.p = "REGULAR")));
        break;
      case "LOW":
        setCategory(toDo.filter((task) => (task.p = "LOW")));
        break;
      default:
        setCategory(toDo);
        break;
    }
  };

  return (
    <div className="priority select">
      <select onChange={handlePriority} name="todos" className="filter-todo">
        <option className="HIGH" value="HIGH">
          HIGH
        </option>
        <option value="RERGULAR">REGULAR</option>
        <option value="LOW">LOW</option>
      </select>
    </div>
  );
};

export default Priority;
