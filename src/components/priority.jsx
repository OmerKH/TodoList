import React from "react";

const Priority = (setLable) => {
  const handlePriority = (e) => {
    setLable(e.target.value);
  };

  return <div className="priority select"></div>;
};

export default Priority;
