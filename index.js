/* universal window onload*/
window.onload = function(){
var x = localStorage.getItem("mode");
var y = document.getElementById("toggler");
var a = localStorage.getItem("check");


if(x == 1){
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
y.style.justifyContent ="flex-start";
}
else if(x == 2){
document.body.classList.add("dark-theme");	
document.body.classList.remove("light-theme");
y.style.justifyContent ="flex-end";			
}
else{
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
y.style.justifyContent ="flex-start";
}


if(a == 5) {
document.getElementById("details").style.display ="none";				
}else{
document.getElementById("details").style.display ="flex";					
}
}




/* details form */
document.getElementById("form").onsubmit = function(){
event.preventDefault();
var x = document.getElementById("username").value; 
localStorage.setItem("username", x);
localStorage.setItem("check", 5);
document.getElementById("details").style.display ="none";
}



/* dark mode together */
document.getElementById("toggler").onclick = function(){
var x = document.getElementById("toggler"); 

if(x.style.justifyContent ==="flex-end") {
x.style.justifyContent ="flex-start";
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
localStorage.setItem("mode", 1);		
}
else{
x.style.justifyContent ="flex-end";	
document.body.classList.add("dark-theme");			
document.body.classList.remove("light-theme");	
localStorage.setItem("mode", 2);
}				
}

/* chat */
document.getElementById("chat").onclick = function(){
var x = document.getElementById("chat");
var y = document.getElementById("talk");
var a = document.getElementById("card1");
var b = document.getElementById("card2");
x.style.background ="var(--darkbg)";
y.style.background ="transparent";

a.style.display ="flex";
b.style.display ="none";
}
/* talk */
document.getElementById("talk").onclick = function(){
var x = document.getElementById("talk");
var y = document.getElementById("chat");
var a = document.getElementById("card1");
var b = document.getElementById("card2");
x.style.background ="var(--darkbg)";
y.style.background ="transparent";

b.style.display ="flex";
a.style.display ="none";
}




/* sidebar */
document.getElementById("menu").onclick = function(){
var x = document.getElementById("sidebar");
x.style.left ="0";
document.body.classList.add("side-blur");
document.body.classList.add("point");
}
document.getElementById("close").onclick = function(){
var x = document.getElementById("sidebar");
x.style.left ="-100%";
document.body.classList.remove("side-blur");
document.body.classList.remove("point");
}


