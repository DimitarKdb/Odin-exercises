let container = document.querySelector("#container");

let header = document.createElement("h3");

header.textContent = "I am blue"
header.style.color = "blue";

let para = document.createElement("p");

para.textContent = "Hey I'm red";
para.style.color = "red";

container.appendChild(para);
container.appendChild(header);

let div = document.createElement("div");

div.style.borderColor = "black";
div.style.borderStyle = "solid";
div.style.borderWidth = "2px";
div.style.backgroundColor = "pink";
div.style.padding = "15px"

headerTwo = document.createElement('h1');
headerTwo.textContent = "I am IN A DIV";

paraTwo = document.createElement('p');
paraTwo.textContent = "Me tOOO!";

div.appendChild(headerTwo);
div.appendChild(paraTwo);

container.appendChild(div);