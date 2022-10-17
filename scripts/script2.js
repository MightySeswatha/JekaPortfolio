
var requestURL = 'https://jeka8833.github.io/tempFileForSevaPractics.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
let str = JSON.stringify(request.response);
let res = "";
let arr = [];
let c = 0;

for(let i = 0; i < str.length; i++){
if(str[i] == "]" || str[i] == "["){}
else{res += str[i];}
}

str = "";
for(let j = 0; j < res.length; j++){
if(res[j] != "}"){str += res[j];}
else if(res[j] == "}"){str += res[j]; arr[c] = JSON.parse(str); str = ""; j++; c++;}
}

const name1 = document.getElementById('name1');
const text1 = document.getElementById('text_1');
const img1 = document.getElementById('img1');

const name2 = document.getElementById('name2');
const text2 = document.getElementById('text_2');
const img2 = document.getElementById('img2');

const name3 = document.getElementById('name3');
const text3 = document.getElementById('text_3');
const img3 = document.getElementById('img3');

name1.textContent = arr[0]["name"];
text1.textContent = arr[0]["description"];
img1.style.backgroundImage = "url('"+arr[0]["image"]+"')";

name2.textContent = arr[1]["name"];
text2.textContent = arr[1]["description"];
img2.style.backgroundImage = "url('"+arr[1]["image"]+"')";

name3.textContent = arr[2]["name"];
text3.textContent = arr[2]["description"];
img3.style.backgroundImage = "url('"+arr[2]["image"]+"')";
}
