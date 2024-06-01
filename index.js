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
