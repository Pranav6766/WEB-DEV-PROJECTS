import TodoItem from "./todoItem";

const TodoItems = ({ todoItems, handleDelete }) => {
  
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index = {index}
          todoname={item.name}
          tododate={item.dueDate}
          handleDelete={handleDelete}
        ></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
