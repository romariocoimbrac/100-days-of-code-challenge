const $addTodoButton = document.getElementById("addTodo");
const $todoContainer = document.getElementById("todoContainer");
const $inputField = document.getElementById("inputField");

$addTodoButton.addEventListener("click", function () {
  if ($inputField.value === "") return;
  let todoContent = document.createElement("p");
  todoContent.classList.add("todo-style");
  todoContent.innerText = $inputField.value;
  $todoContainer.appendChild(todoContent);
  deleteTask(todoContent);
  completeTask(todoContent);
  $inputField.value = "";
});

function completeTask(todoContent) {
  todoContent.addEventListener("click", function () {
    this.style.textDecoration = "line-through";
  });
}

function deleteTask(todoContent) {
  todoContent.addEventListener("dblclick", function () {
    $todoContainer.removeChild(this);
  });
}
