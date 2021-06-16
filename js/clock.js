const clock = document.querySelector("#clock");

function getClock(){
	const date = new Date();
	const hour = String(date.getHours()).padStart(2,"0");
	const min = String(date.getMinutes()).padStart(2,"0");
	const sec = String(date.getSeconds()).padStart(2,"0");
	clock.innerText =`${hour}시 : ${min}분 : ${sec}초`;
}

getClock();
setInterval(getClock, 1000);