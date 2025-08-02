import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoname, tododate, index }) {
  let {deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-5 item-container">{todoname}</div>
        <div className="col-4 item-container">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => deleteItem(index)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
