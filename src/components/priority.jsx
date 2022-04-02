import React, { useEffect, useState } from "react";

const Priority = () => {
  const [lable, setLable] = useState("");

  const handlePriority = (e) => {
    setLable(e.target.value);
  };

  return (
    <div className="priority select">
      <select onChange={handlePriority} name="todos" className="filter-todo">
        <option className="high" value="HIGH">
          HIGH
        </option>
        <option value="RERGULAR">REGULAR</option>
        <option value="LOW">LOW</option>
      </select>
    </div>
  );
};

export default Priority;
