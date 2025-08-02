import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./todoItem";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  //usecontext TodoItemsContext ka current value retrive krega and usko todoItems me la dega
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index = {index}
          todoname={item.name}
          tododate={item.dueDate}
        ></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
