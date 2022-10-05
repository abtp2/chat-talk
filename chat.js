var user_name = localStorage.getItem("username");

/* universal window onload*/
window.onload = function(){
var x = localStorage.getItem("mode");
var y = localStorage.getItem("username");

document.getElementById("user-name").innerHTML =y;
if(x == 1){
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
}
else if(x == 2){
document.body.classList.add("dark-theme");	
document.body.classList.remove("light-theme");	
}
else{
document.body.classList.add("light-theme");
document.body.classList.remove("dark-theme");
}
}



setInterval(function rep(){
const x =document.getElementById("int-main").value;
if(x.includes("×")){
const y = x.replace(/×/g, "*");
document.getElementById("int-main").value = y;
}

if(x.includes("÷")){
const z = x.replace(/÷/g, "/");
document.getElementById("int-main").value = z;
}
},200);



const d = new Date();
let day = d.getDate();
let year = d.getFullYear();
const months = [ "January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"]; 

document.getElementById("dates").innerHTML = day +     
   " " + months[d.getMonth()] + " " +  year; 	


document.getElementById("form").onsubmit = function(){
event.preventDefault();
}






/* main replying code starts*/
document.getElementById("send").onclick = function(){
var pho = /^[0-9()+\-*.\/\s]*$/gm;
const x =document.getElementById("int-main").value;
var phoneResult = pho.test(x);
const elem = document.getElementById("chat");


document.getElementById("int-main").focus();
document.getElementById("sound").play();
if(x ==""){
const node = document.createElement("div");
const textnode = document.createTextNode("Don't send empty messages!");
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "bot-reply"); 	 elem.scrollBy(0,6000);				
}
else{
const node = document.createElement("div");
const textnode = document.createTextNode(x);
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "user-reply");
elem.scrollBy(0,6000);
}


if (x.includes("ello")){ 
const node = document.createElement("div");
const textnode = document.createTextNode("Hey, my name is chat-bot.");
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "bot-reply"); 	
elem.scrollBy(0,6000);
document.getElementById("int-main").value ="";
}
 else if(phoneResult == true){
const evo =eval(x);
const node = document.createElement("div");
const textnode = document.createTextNode(evo);
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "bot-reply"); 				
elem.scrollBy(0,6000); 
document.getElementById("int-main").value ="";
}
else if (x.includes("hi") || x.includes("Hi")){ 
const node = document.createElement("div");
const textnode = document.createTextNode("Hey, my name is chat-bot.");
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "bot-reply"); 	
elem.scrollBy(0,6000);
document.getElementById("int-main").value ="";
}
else if (x.includes("ow are you")){
const node = document.createElement("div");
const textnode = document.createTextNode("I am fine as because of developer Ashutosh");
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "bot-reply"); 	 elem.scrollBy(0,6000);				
document.getElementById("int-main").value ="";
}
else if(x.includes("my name")){
const node = document.createElement("div");
const textnode = document.createTextNode("Your name is " + user_name);
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "bot-reply"); 	 elem.scrollBy(0,6000);								
document.getElementById("int-main").value ="";
}


else{
const node = document.createElement("div");
const textnode = document.createTextNode("Sorry, I can't understand");
node.appendChild(textnode);
document.getElementById("chat").appendChild(node);
node.setAttribute("id", "bot-reply"); 	 elem.scrollBy(0,6000);
document.getElementById("int-main").value ="";
}
}
