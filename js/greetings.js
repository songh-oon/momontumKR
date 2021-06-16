const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greetings")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

//hello username을 추가하고 hidden class를 삭제 
function paintGreetings(username){
	greeting.innerText = `${username} 님, 다 하실꺼죠?`;
	greeting.classList.remove(HIDDEN_CLASSNAME)
}

// Form을 hidden 하고 localStorage에 username을 저장, paintGreetings함수를 실행함. 
function LoginSubmit(event){
	event.preventDefault();
	const typedUsername = loginInput.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, typedUsername);
	paintGreetings(typedUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 username이 없다면 폼을 통해서 username을 submit하도록 하고, 있다면 greeting에 hidden 삭제 및 paintGreetings함수를 실행
if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", LoginSubmit);
} else {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	paintGreetings(savedUsername);
}





