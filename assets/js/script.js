let btn = document.getElementById("btn");
let menu = document.getElementById("menu");
let chiguagua = document.getElementById("chiguagua");

btn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(menu.style.display == "none"){
  menu.style.display = "flex";
  } else{
    menu.style.display = "none";
  }
});