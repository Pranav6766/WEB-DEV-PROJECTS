import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
}); 
//give the intial value
//this way auto-complete will be given

const TodoItemContextProvider = ({children}) => { //created a component
  // let [todoItems, settodoItems] = useState([]);
  const [todoItems, dispatch] = useReducer(todoitemsreducer, []);

  const addNewItem = (todoName, tododate) => {
    const newItemAction = {
      //this is the action
      type: "NEW_ITEM",
      payload: {
        todoName,
        tododate,
      },
    };

    dispatch(newItemAction);//action ek plain js object hota hai
    // settodoItems((currValue) => [
    //   ...currValue,
    //   {
    //     name: todoName,
    //     dueDate: tododate,
    //   },
    // ]);
  };

  const deleteItem = (idx) => {
    const deleteItemAction = {
      //this is the action
      type: "DELETE_ITEM",
      payload: {
        todoName,
        tododate,
      },
    };
    dispatch(deleteItemAction);
    // let newList = todoItems.filter((_, index) => index !== idx);
    // settodoItems(newList);
  };

  return <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>

}

export default TodoItemContextProvider;