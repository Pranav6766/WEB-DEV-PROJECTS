import TodoItem from "./todoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem todoname={item.name} tododate={item.dueDate}></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
