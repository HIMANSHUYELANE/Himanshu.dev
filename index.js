let nav = document.getElementById("nav");
let menu = document.getElementById("menu");
let cancel = document.getElementById("cancel");

menu.addEventListener("click", () => {
  nav.classList.toggle("translate-x-[0%]");
  cancel.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});

cancel.addEventListener("click", () => {
  nav.classList.toggle("translate-x-[0%]");
  menu.classList.toggle("hidden");
  cancel.classList.toggle("hidden");
});

let cont=document.getElementById('cont')
let img=document.getElementById('img')

// document.addEventListener('DOMContentLoaded',()=>{
//   cont.classList.add('translate-x-0')
//   img.classList.add('translate-x-0')
// })


let btn=document.getElementById('btn')
btn.addEventListener('click',(e)=>{
  let name=document.getElementById('name')
  let mail=document.getElementById('mail')
  let message=document.getElementById('message')
  let m1=document.getElementById('m1')
  let m2=document.getElementById('m2')
  let m3=document.getElementById('m3')
  
  if(name.value.trim()===''){
    m1.classList.toggle('hidden')
    e.preventDefault()
  }
 if(mail.value.trim() === ''){
  m2.classList.toggle('hidden')
  e.preventDefault()
  }
  if(message.value.trim()===''){
    m3.classList.toggle('hidden')
    e.preventDefault()
  }
})