// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red!";
para.style.color = "red";
//p {color:red;}

container.appendChild(para);

const h3 = document.createElement('h3');
//h3.classList.add('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

const box = document.createElement('div');
box.style.borderStyle = "solid";
box.style.backgroundColor = "pink";

container.appendChild(box);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

box.appendChild(h1);

const p = document.createElement('p');
p.textContent = "ME TOO!";

box.appendChild(p);