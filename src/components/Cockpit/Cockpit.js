import React from "react";

const cockpit = (props) => {
  const style = {
    backgroundColor: "gray",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>This is a React App</h1>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
