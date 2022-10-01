window.onload = function(){
console.log("Hola!.This page is loaded!")
const m_btn = document.getElementById("menu_btn");
const m = document.getElementById("menu");
const m_btn1 = document.getElementById("menu_btn1");
const m1 = document.getElementById("menu1");

m_btn.onclick = function(){
m.classList.toggle("menu-list");
m.classList.toggle("off");
}

m_btn1.onclick = function(){
m1.classList.toggle("menu-list");
m1.classList.toggle("off");
}

};
