import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  let [displayValue, setDisplayValue] = useState("");

  const addToDisplay = (label) => {
    if (label === "=") {
      let result = eval(displayValue);
      setDisplayValue(result.toString());
    } else if (label === "C") {
      setDisplayValue("");
    } else {
      let newDisplayValue = displayValue + label;
      setDisplayValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display value={displayValue}></Display>
      <ButtonContainer addToDisplay={addToDisplay}></ButtonContainer>
    </div>
  );
}

export default App;
