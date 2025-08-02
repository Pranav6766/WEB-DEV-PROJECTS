import { useState, useTransition } from "react";
import Item from "./individualItem";

const Items = ({ list }) => {
  let [activeItems, setActiveItems] = useState([]);

  let addItem = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {/* {} used for writing JS code. */}
      {list.map((item) => (
        // map method renders lists from array data.
        // a key value is needed foe every data
        <Item
          key={item}
          indiItem={item}
          bought={activeItems.includes(item)}
          BuyButton={() => {
            addItem(item);
          }}
        ></Item>
      ))}
      {/* <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li> */}
    </ul>
  );
};
export default Items;
