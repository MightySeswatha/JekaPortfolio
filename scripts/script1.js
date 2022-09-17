window.onload = function(){
console.log("Hola!.This page is loaded!")
const m_btn = document.getElementById("menu_btn");
const m = document.getElementById("menu");

m_btn.onclick = function(){
m.classList.toggle("menu-list");
m.classList.toggle("off");
}

};
