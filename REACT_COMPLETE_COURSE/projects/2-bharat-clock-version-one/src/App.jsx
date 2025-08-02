import Heading from "./components/heading";
import Motto from "./components/motto";
import DisplayTime from "./components/displayTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="my-div">
      <Heading></Heading>
      <Motto></Motto>
      <DisplayTime></DisplayTime>
    </div>
  );
}

export default App;
