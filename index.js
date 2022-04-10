use strict";
const modals={
  modal_text:[
  "An ajax replica<br/>javascript library<br/>for sending http<br/>request to server",
  "A javascript <br/>micro framework <br/>for building UI",
  "A small<br/>promised based<br/>javascript encyption<br/>library<br/>for encrypting data"
  ],
 modal_link: ["https://github.com/iamGodkid/ArchJS", "https://github.com/iamGodkid/GrealJS", "https://github.com/iamGodkid/LilcryptJS"], 
}
function pop(n){
  const all=document.body.querySelectorAll("strong");
  const targ = document.querySelector("#mbody");
 const t_link = document.querySelector("#href"); 
 const elem = n;
  $("#modal").show();
 
   if(elem == "archjs"){
     targ.innerHTML = modals.modal_text[0];
     t_link.href = modals.modal_link[0]
      
    } if(elem == "grealjs"){
     targ.innerHTML = modals.modal_text[1];
     t_link.href = modals.modal_link[1]
      
    }
  if(elem == "lilcryptjs"){
     targ.innerHTML = modals.modal_text[2];
     t_link.href = modals.modal_link[2]
      
  }
}

const quotes=[
  ["enhancing<br/>User Interface"],
  ["I CODE"],
  ["I BUILD SOFTWARE<br/>AND TOOLS"],
  ["ITS ALL WEB<br/>AND TECH."]
  ]
  
function quote(){
  const fetch_target = document.body.querySelector("#quotes");
  const index = Math.floor(Math.random()*quotes.length);
    fetch_target.innerHTML = quotes[index];
  
}
setInterval("quote()", 2000);
