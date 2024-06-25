import React, { useState } from "react";

const Todoinput = (props) => {
  const { handleAddTodo , todovalue,setTodovalue} = props;
 
  return (
    <header>
      <input
        value={todovalue}
        onChange={(e) => {
          setTodovalue(e.target.value);
        }}
        type="text"
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          handleAddTodo(todovalue);
          setTodovalue('');
        }}
      >
        Add
      </button>
    </header>
  );
};

export default Todoinput;
