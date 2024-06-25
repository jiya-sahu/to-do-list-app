import React from "react";

const Todocard = (props) => {
  // to acess all the child of todocard component we use props and destructure it 
  const {children , handledeletetodo,index, HandleEdittodo } = props
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={()=>{
          HandleEdittodo(index)
          }}>
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{
          handledeletetodo(index);
        }}>
        <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Todocard;
