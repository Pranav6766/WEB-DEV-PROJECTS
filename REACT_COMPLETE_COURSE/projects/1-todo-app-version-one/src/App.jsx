import AppName from "./components/AppName";
import AddTodo from "./components/addTodo";
import TodoItem1 from "./components/todoitem1";
import TodoItem2 from "./components/todoitem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;
