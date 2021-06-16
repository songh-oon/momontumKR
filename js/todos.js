const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos"

let toDos= [];

function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
	const li =  event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo is argument
	saveToDos();
}

function paintToDo(newTodo){
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerText = newTodo.text+" ";
	const button = document.createElement("button");
	button.innerText = "지우기";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function toDoSubmit(event){
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id : Date.now(),
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); 

if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos
	parsedToDos.forEach(paintToDo);
}

function oFilter(todo){
	return todo.id !== "id";
}





