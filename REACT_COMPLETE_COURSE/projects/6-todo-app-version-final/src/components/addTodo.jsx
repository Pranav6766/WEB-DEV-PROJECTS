// import { useState } from "react";
import { useRef } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

function AddTodo({ shareTodo }) {
  //to track changes of both the input field, we will use state and then by using onChange we will track the input changes
  // let [todoName, setTodoName] = useState("");
  // let [todoDate, setTodoDate] = useState("");

  //agar usestate ke jgh useref kre toh event handler ka use nhi padega and baar baar repaint nhi krna hoga
  let todoNameElement = useRef(); //string nhi bnana kyuki uska koi value nhi hota
  let todoDateElement = useRef();

  // const handleName = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDate = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleOnClick = (event) => {
    event.preventDefault();
    let todoDate = todoDateElement.current.value;
    let todoName = todoNameElement.current.value;
    shareTodo(todoName, todoDate);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleOnClick}>
        <div className="col-5">
          {/* use of REF attribute for DOM interactions */}
          <input type="text" placeholder="Enter TODO here" ref={todoNameElement}/>
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          {/* form ke andar button ka default type submit ke behave krta aur action attribute na hone ke karan wapas se localhost ko data bhejta hai jisse page refresh hota */}
          <button type="submit" className="btn btn-success my-button">
            <MdFormatListBulletedAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
