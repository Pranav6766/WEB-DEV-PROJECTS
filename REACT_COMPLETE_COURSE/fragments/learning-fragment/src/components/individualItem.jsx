import styles from "./individualItem.module.css";
function Item(props) {
  // props are immutable
  //we can even create a function to define onClick
  let purchased = props.bought;
  return (
    <li
      className={`${styles["my-item"]} list-group-item ${
        purchased && "active"
      }`}
    >
      <span className={styles["my-item"]}>{props.indiItem}</span>
      <button
        className={`${styles.button} btn btn-dark`}
        // onclick expects a function refernce
        //if use BuyButton(currentItem) directly then it executes the function immediately upon rendering the component
        //so we use () => myFunction(arg) i.e. ARROW FuNCTION to tell that when click happens then do this...
        onClick={props.BuyButton}
        // behaviour of function is not defined to item it is coming from the parent
      >
        Buy
      </button>
    </li>
  );
  //individual item dikhane ki responsibilty hai ispe so my-item class added here
}
export default Item;
// can use array element by destructuring
