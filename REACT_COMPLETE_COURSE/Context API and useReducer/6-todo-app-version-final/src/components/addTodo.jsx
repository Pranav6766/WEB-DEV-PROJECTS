// import { useState } from "react";
import { useContext, useRef } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  let {addNewItem} = useContext(TodoItemsContext);
  let todoNameElement = useRef(); 
  let todoDateElement = useRef();

  const handleOnClick = (event) => {
    event.preventDefault();
    let todoDate = todoDateElement.current.value;
    let todoName = todoNameElement.current.value;
    addNewItem(todoName, todoDate);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleOnClick}>
        <div className="col-5">

          <input type="text" placeholder="Enter TODO here" ref={todoNameElement}/>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success my-button">
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
