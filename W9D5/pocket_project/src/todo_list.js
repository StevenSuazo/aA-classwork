const storageStr = localStorage.getItem("todos")
let todos;
const ul = document.querySelector(".todos")
const form = document.querySelector(".add-todo-form")

if (storageStr.length > 0) {
  todos = JSON.parse(storageStr)
  populateList()
} else {
  todos = []
}

function addTodo () {
  while (ul.children.length > 1) {
    ul.removeChild(ul.lastChild);
  }
  const text = document.querySelector('input[name="add-todo"]').value;
  const todo = {"val": text, "done": false}
  todos.push(todo)
  document.querySelector('input[name="add-todo"]').value = "";
  populateList();
  localStorage.setItem("todos", JSON.stringify(todos));
}

function populateList() {
  todos.forEach(todo => {
    const label = document.createElement("label");
    label.htmlFor = "todo";
    label.textContent = todo["val"];

    const checkBox = document.createElement("input");
    checkBox.id = "todo";
    checkBox.type = "checkbox";
    
    const li = document.createElement("li");
    li.className = "todo-goal"
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.appendChild(li);
  })
}

function handleSubmit() {
  form.addEventListener("submit", event => {
    // debugger;
    event.preventDefault();
    addTodo();
  });
}

function handleCheckbox() {
  const lis = document.querySelectorAll(".todo-goal")
  li.addEventListener("click", event => {
    debugger;
  })
}

handleSubmit();
handleCheckbox();