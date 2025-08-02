import AppName from "./components/AppName";
import AddTodo from "./components/addTodo";
import TodoItems from "./components/todoItems";
import EmptyMessage from "./components/emptyMessage";
import "./App.css";
import { useState } from "react";
import TodoItemContextProvider, {
  TodoItemsContext,
} from "./store/todo-items-store";
import { useReducer } from "react";

//reducer must be a pure function
//action ko argument leta aur reducer ko return krta
const todoitemsreducer = (state, action) => {
  let newTodoItems = state;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...state,
      {
        name: action.payload.todoName,
        dueDate: action.payload.tododate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = state.filter((_, index) => index !== idx);
  }

  return newTodoItems;
};

function App() {
  return (
    //suppose apne ko pure conatiner me provide krana hai to sabse outer div me rkhna hoga
    //provider apne tag ke within saare children le rha jisme wo provide krane ki kosis krega
    //If you leave out the value attribute, React treats it as if you wrote value={undefined}. This will often lead to confusing bugs
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <EmptyMessage></EmptyMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
