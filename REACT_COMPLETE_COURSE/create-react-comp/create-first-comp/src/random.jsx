function Random() { // tag bn gya hai random
  let randomNum = Math.random() * 100;
  return <h1 style={{'backgroundColor':'rgb(65, 158, 52)'}}>random number is : {Math.round(randomNum)}</h1>;
}
export default Random; 
//<Random/> -> keep it either self closing or normal one in app.jsx