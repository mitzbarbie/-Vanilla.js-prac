const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //   console.log(event.target);
  //   console.dir(event.target);
  //   console.log(event.target.parentElement);

  const li = event.target.parentElement;
  //   console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); // after delete something and have to save again
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");

  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;

  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);

  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //   console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}

// const arr = ["pizza", "tomaoto", "banana"];

// function newArr(food) {
//   return food !== "banana";
// }

// arr.filter(newArr);

// const newNew = arr.filter(newArr);

// console.log(arr);
// console.log(newNew);

// const baba = ["123", "456", "789"];

// baba.filter((item) => item !== "456");

// const newBaba = baba.filter((item) => item !== "456");

// console.log(newBaba);
