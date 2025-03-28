let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
displayItems();
function addTodo() {
  let item = document.querySelector("#todo-input").value;
  let dueDate = document.querySelector("#todo-date").value;
  todoList.push({ item, dueDate });
  (localStorage.setItem('todoList',JSON.stringify(todoList)));
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
    newHtml += `<span>${item}</span>
    <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteItem(${i})">Delete</button>
    `;
  }
  containerELement.innerHTML = newHtml;
}
function deleteItem(i){
  todoList.splice(i,1); 
  localStorage.setItem('todoList',JSON.stringify(todoList));
  displayItems();
}
