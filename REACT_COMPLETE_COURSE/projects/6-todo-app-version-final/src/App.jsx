import AppName from "./components/AppName";
import AddTodo from "./components/addTodo";
import TodoItems from "./components/todoItems";
import EmptyMessage from "./components/emptyMessage";
import "./App.css";
import { useState } from "react";
function App() {
  //define state for todoItems
  let [todoItems, settodoItems] = useState([]);

  //to update state from previous state we can use either spread operatoor or use functional updates
  //functional updates are like -> (existing) => (postDAta, ...Existing)

  const handleTodo = (todoName, tododate) => {
    // let newItem = {
    //   name: todoName,
    //   dueDate: tododate,
    // };
    // let newTodo = [...todoItems, newItem]; //... is spread operator
    // settodoItems(newTodo);

    settodoItems((currValue) => 
      // The first argument of the functional updater in setState/useState is always the latest state for that variable, iska matlab currValue me already todoItem hai
      [
      ...currValue,
      {
        name: todoName,
        dueDate: tododate,
      },
    ]);
  };

  const handleDelete = (idx) => {
    let newList = todoItems.filter((_, index) => index !== idx);
    settodoItems(newList);
  };

  let len = todoItems.length;
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo shareTodo={handleTodo}></AddTodo>
      {len === 0 && <EmptyMessage></EmptyMessage>}
      <TodoItems todoItems={todoItems} handleDelete={handleDelete}></TodoItems>
    </center>
  );
}

export default App;
