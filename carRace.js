console.log("hero")


document.addEventListener("DOMContentLoaded",function(){
	roadDiv = document.querySelector("#road")
		car1Div = document.querySelector("#car1")
	car2Div = document.querySelector("#car2")
	 scoreDiv = document.querySelector("#score")
	 function MoveLeft(){
	 	car1Leftpos =parseInt(window.getComputedStyle(car1Div).getPropertyValue("left"));
	 	car1Leftpos -=100
	 	if(car1Leftpos >=0){
	 	car1Div.style.left=car1Leftpos + "px"
	 }
	 }
	 function MoveRight(){
	 	car1Leftpos =parseInt(window.getComputedStyle(car1Div).getPropertyValue("left"));
	 	car1Leftpos +=100
	 	if(car1Leftpos<250){
	 	car1Div.style.left=car1Leftpos + "px"
	 }
	 }
	 function MoveTop(){
	 	car1Toppos=parseInt(window.getComputedStyle(car1Div).getPropertyValue("top"))
	 	car1Toppos -=50
	 	if(car1Toppos>=0){
	 	car1Div.style.top=car1Toppos + "px"
	  }
	 }
	 function MoveBottom(){
	 	car1toppos=parseInt(window.getComputedStyle(car1Div).getPropertyValue("top"))
	 	car1toppos +=50
	 	if(car1toppos<=650)
	 	car1Div.style.top=car1toppos + "px"
	 }

	 document.addEventListener("keydown", function(e){
	 		if(e.key == 'ArrowLeft'){
	 			MoveLeft();
	 			/*console.log(car1Div)*/
	 		}
	 		if(e.key =='ArrowRight'){
	 			MoveRight();
/*	 			console.log(car1Div)
*/	 		}
	 		if(e.key == "ArrowUp"){
	 			MoveTop();
	 			/*console.log(car1Div)*/
	 		}
	 		if(e.key == "ArrowDown"){
	 			MoveBottom();
	 			/*console.log(car1Div)*/
	 		}
	 })

	 document.addEventListener('animationiteration',function(){
	 	randomNum=Math.floor(Math.random()*3)*100;
	 	car2Div.style.left=randomNum +"px"
	 })
score = 0
	  CheckGameOver=setInterval(function(){
	  	score++;
	 	  car1Divpos =parseInt(window.getComputedStyle(car1Div).getPropertyValue("left"));
	
	 	 car2Divpos =parseInt(window.getComputedStyle(car2Div).getPropertyValue("left"));

	 	 car1Divpos =parseInt(window.getComputedStyle(car1Div).getPropertyValue("left"));
	 	car2Divpostop =parseInt(window.getComputedStyle(car2Div).getPropertyValue("top"));
scoreDiv.innerHTML="SCORE:-"+score
	if(car1Divpos == car2Divpos && car2Divpostop>400 ){
		
		alert("boom ")
		road.style.animation="none";
		car2.style.animation="none";
		car1.style.left="none";
		car1.style.top= "none"
		car2Div.style.top=car2Divpostop+"px"; 
		clearInterval(CheckGameOver)
	}
	else{
		console.log("no crash")
	}
	 },100);
})

