import AppName from "./components/AppName";
import AddTodo from "./components/addTodo";
import TodoItem from "./components/todoItem";
import TodoItems from "./components/todoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "17/5/25",
    },
    {
      name: "New task",
      dueDate: "18/5/25",
    },
    {
      name: "Task 3",
      dueDate: "20/5/25",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
