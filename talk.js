var user_name = localStorage.getItem("username");

/* universal window onload*/
window.onload = function(){
var x = localStorage.getItem("mode");

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










const time = document.querySelector("#time");
setInterval(()=>{
let date = new Date(); 
let hours = date.getHours(); 
let minutes = date.getMinutes(); 
let seconds = date.getSeconds(); 
let day_night = "AM"; 

var dd = String(date.getDate()).padStart(2, '0'); 
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
taareek = dd; 
mahina = mm;
saal = yyyy;


if(hours > 12){ 
day_night = "PM"; hours = hours - 12; 
} 
if(seconds < 10){
seconds = "0" + seconds; 
} 
if(minutes < 10){ 
minutes = "0" + minutes; 
} 
if(hours < 10){ 
hours = "0" + hours; 
} 
time.textContent = hours + ":" + minutes +
day_night; 


document.getElementById("taareek").innerText =taareek.replace("0", " ");
document.getElementById("mahina").innerText =mahina.replace("0", " ");
document.getElementById("saal").innerText =saal;
}); 






const utterance = new SpeechSynthesisUtterance();
															
const texts = document.querySelector(".texts");
const nut =document.getElementById("speak");
utterance.rate = 0.9;
utterance.volume = 1;
utterance.pitch = 0.5;
utterance.lang = "en-IN"; 		
	
function get(){
window.speechSynthesis.speak(utterance);				
}



window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  const pho = /^[0-9()+\-*.\/\s]*$/gm;
  const phoneResult = pho.test(text);
  if (e.results[0].isFinal) {
   if (text.indexOf('hello') > -1 ||
      text.indexOf('Hello') > -1
    ) {
       					
      utterance.text = "hi" + user_name;    
      nut.click();}
    
  
  
    if (text.indexOf('is your name') > -1 ||
      text.indexOf('your name') > -1
    ) {
       					
      utterance.text = "My name is talk-bot. my developer Ashutosh has given me this name.";
      nut.click();}    
      
      
       if (text.indexOf('my name') > -1 ||
      text.indexOf('My name') > -1
    ) {
       					
      utterance.text = "your name is" + user_name;
      nut.click();}    
      
      
      
      if (text.indexOf('about you') > -1 ||
      text.indexOf('yourself') > -1
    ) {
       					
      utterance.text = "My name is Talk-bot. my developer Ashutosh has given me this name.I am a example of an AI,i can talk you like your friend. You can ask me to tell you time,whether,date etcetera.";
      nut.click();}    
      
      
      
      if (text.indexOf('who are you') > -1 ||
      text.indexOf('what are you') > -1
    ) {
       					
      utterance.text = "My name is Talk-bot. my developer Ashutosh has given me this name.I am a example of an AI,i can talk you like your friend. You can ask me to tell you time,whether,date etcetera.";
      nut.click();}   
      
      
      
      if (text.indexOf('you do') > -1 ||
      text.indexOf('what can you do') > -1
    ) {
       					
      utterance.text = "I can talk with you like a friend. I can tell you time,date,weather etcetera.";
      nut.click();}     
      
            
               
          
       if (text.indexOf('how are you') > -1 ||
      text.indexOf('are you fine') > -1
    ) {
       
      utterance.text = "I am fine.";
      nut.click();}    
    
    
    
    if (text.indexOf('Ashutosh') > -1 ||
      text.indexOf('ashutosh') > -1
    ) {
       
      utterance.text = "He is my developer. He is expert making the AI like me.";
      nut.click();}
      
      if (text.indexOf('dhruv') > -1 ||
      text.indexOf('Dhru') > -1
    ) {
       
      utterance.text = "He is my developer. He is a Front-end developer";
      nut.click();}
      
    
    
    
    if (text.indexOf('made') > -1) {
       
      utterance.text = "I am made bye Ashutosh. He is my software developer.";
      nut.click();}
    
    
    
    
    if (text.indexOf('your developer') > -1 ||
      text.indexOf('your developers') > -1
    )  {
       
      utterance.text = "Ashutosh. He is my software developer.";
      nut.click();}
      
      
      


if (text.indexOf('time') > -1)  {
       
      utterance.text = time.textContent;
      nut.click();}


if (text.indexOf('date') > -1 ||
      text.indexOf('Date') > -1
    ) {
       
      utterance.text = document.getElementById("taareek").innerText;
      nut.click();}
      
      
if (text.indexOf('month') > -1 ||
      text.indexOf('Month') > -1
    ) {
       
      utterance.text = document.getElementById("mahina").innerText;
      nut.click();}
      
      
if (text.indexOf('year') > -1 ||
      text.indexOf('Year') > -1
    ) {
       
      utterance.text = document.getElementById("saal").innerText;
      nut.click();}
      
if (text.indexOf('weather') > -1 ||
      text.indexOf('Weather') > -1
    ) {
       
      utterance.text = "26 degree Celsius";
      nut.click();}
      
if (text.indexOf('whether') > -1 ||
      text.indexOf('Whether') > -1
    ) {
       
      utterance.text = "26 degree Celsius";
      nut.click();}
      
     
     
if (text.indexOf('repeat') > -1 ||
      text.indexOf('Repeat') > -1
    ) {
      nut.click();}




if(phoneResult == true){
const evo =eval(text);	
 
utterance.text = evo;
nut.click();
}


      
      
      
   if (text.indexOf('bye') > -1) {
       
      utterance.text = "ok. please come back later to meet me.";
      nut.click();}
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
