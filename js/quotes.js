const quotes = [
	{
		quote: "가능의 한계를 알기 위한 유일한 방법은 불가능의 영역에 살짝 발을 들여 놓아 보는 것이다.",
		author: "아서 클라크",
	},
	{
		quote: "가장 큰 약점은 약점을 보일 것에 대한 두려움이다.",
		author: "보쉬에, <Politics from Holy Writ>, 1709",
	},
	{
		quote: "강한 자가 이기는 것이 아니라, 이긴 자가 강한 것이다.",
		author: "프란츠 베켄바우어",
	},
	{
		quote: "과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
		author: "조지 산타야나, <이성의 삶>, 1905년",
	},
	{
		quote: "나는 평화로운 노예로 사느니, 차라리 위험천만한 자유를 택하겠다.",
		author: "토머스 제퍼슨",
	},
	{
		quote: "가장 큰 위험은 위험없는 삶이다.",
		author: "스티븐 코비",
	},
	{
		quote: "서로 사랑하면 살고 서로 싸우면 죽는다",
		author: "안창호",
	},
	{
		quote: "용기란 공포를 1분 더 참는 것이다.",
		author: "조지 S. 패튼",
	},
	{
		quote: "진정한 위기는 자원의 부족이 아니라 상상력의 부족이다.",
		author: "파올로 루가리",
	},
	{
		quote: "겸손한 자만이 다스릴 것이요, 애써 일하는 자만이 가질 것이다",
		author: "에머슨",
	},
	{
		quote: "스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다",
		author: "에릭 프롬",
	},
	{
		quote: "군자가 예절이 없으면 역적이 되고, 소인이 예절이 없으면 도적이 된다",
		author: "명심보감",
	},
]

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 

//0~11

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `'${todaysQuote.author}'`;