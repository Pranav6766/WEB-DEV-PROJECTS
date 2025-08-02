function DisplayTime() {
  let time = new Date();
  //time is created as a new object and hence cant be directly used a react child -> {time}
  //so need to use -> time.toLocaleDateString()
  return (
    <div>
      <span>
        This is current date and time: {time.toLocaleDateString()} ,{" "}
        {time.toLocaleTimeString()}{" "}
      </span>
    </div>
  );
}
export default DisplayTime;
