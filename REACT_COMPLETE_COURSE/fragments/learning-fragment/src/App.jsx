// import React from "react";
import Items from "./components/items";
import Container from "./components/container";
import ErrorMessage from "./components/errorMessage";
import FoodInput from "./components/Foodinput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
//share state b/w components by moving it to their closest common ancestor
function App() {
  // let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  //we can return only a single tag in jsx therefore we enclosed h1 and ul in a div here...
  //but this is an issue coz an additional layer of element is introduced
  //so we use a wrapper which contains the child and just display them on web page
  //for that we use -> import React from "react"; and then enclose the desired child in
  //-> React.fragment (fragment allows grouping of multiple elements without extra DOM nodes)
  //shortcut to use React.fragment -> just use <> </> without any import

  //use of termary operator :
  // let emptyMessage = items.length === 0 ? <h4>List is empty.</h4> : null;

  // let textStateArr = useState("Showing user input");
  // let textStateVal = textStateArr[0];
  // let setTextState = textStateArr[1];
  // let [textStateVal, setTextState] = useState("Showing user input");
  let [items, setItems] = useState(["item 1", "item 2"]);
  //use [] for destructuring array, {} is used for objects

  //usestate returns an array of 2 elements.
  //1st one is current value, 2nd one is a function to edit it.
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      //foodItems should be kept as immutable so push_back avoided.
      let newItems = [...items, newFoodItem];
      setItems(newItems);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value); // ye syntax baar baar repaint kr rha , ideal cases me aisa nhi hona chahiye
    // textToShow = event.target.value kaam nhi krega kyuki screen pe paint 1 hi baar hoga jab app ko call krge and everytime app is called it will print the initial value of textToShow so we need to come up with something different.
  };
  return (
    <>
      <Container>
        {/* if want to access the content written inside the conatiner tag then use {props.children}  */}
        <h1 className="my-heading">List</h1>
        {/* in logical opertor if both values true then only statement runs if any value is falsy line null,0,undefined then it wont execute */}
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage list={items}></ErrorMessage>
        <Items list={items}></Items>
      </Container>
      {/*  list = {items} the former name is important as React will catch that
      only */}

      {/* <Container>
        <p>this is just a sample text showcasing child props.</p>
      </Container> */}
    </>
  );
}

export default App;
