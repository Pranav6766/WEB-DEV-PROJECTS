import styles from "./Foodinput.module.css";
const FoodInput = (props) => {
  return (
    <input
      type="text"
      placeholder="Search food item"
      className={styles.foodInput}
      // we are intrested in what th user is writing in the form and hence we use event.target.value jo apne ko batayega ki input me kya gya
      onKeyDown={props.handleKeyDown}
    />
  );
};
export default FoodInput;
