import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./emptyMessage.module.css";

const EmptyMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <div className={styles.font}>NO TASKS.👌</div>
  );
};
export default EmptyMessage;
