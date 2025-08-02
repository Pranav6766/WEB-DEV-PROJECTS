let counter = JSON.parse(localStorage.getItem("counter")) || 0;

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
displayItems();
displayCounter(counter);
function addTodo() {
  let item = document.querySelector("#todo-input").value;
  let dueDate = document.querySelector("#todo-date").value;
  todoList.push({ item, dueDate });
  localStorage.setItem("todoList", JSON.stringify(todoList));
  // 1 baar push ho gya then empty it
  document.querySelector("#todo-input").value = "";
  document.querySelector("#todo-date").value = "";
  displayItems();
}
function displayItems() {
  let containerELement = document.querySelector("#todo-container");
  let newHtml = ""; //every time set as empty string
  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    if (todoList[i].item === "") continue;
    newHtml += `
    <span><input type="checkbox" value="task_done" onclick="taskCounter(${i})">${item}</span>
    <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteItem(${i})">Delete</button>
    `;
  }
  containerELement.innerHTML = newHtml;
}
function deleteItem(i) {
  todoList.splice(i, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayItems();
}
function taskCounter(i) {
  deleteItem(i);
  counter++;
  localStorage.setItem("counter", JSON.stringify(counter));
  displayCounter(counter);
}
function displayCounter(counter) {
  let displayElement = document.querySelector(".task-counter");
  displayElement.innerText = `Completed Task(s): ${counter}`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
