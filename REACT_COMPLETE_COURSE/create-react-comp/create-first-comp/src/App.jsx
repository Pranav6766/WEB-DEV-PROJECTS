import Button1 from "./button";//imported
import Hello from "./hello";
import Random from "./random";
function App() {
  return (
    <div>
      <h1>hello world!</h1>
      {/* <Button1></Button1>  */}
      <Hello></Hello>
      {/* made only 1 random elment but using it 
      everytime 
      ->effective */}
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}
export default App;
