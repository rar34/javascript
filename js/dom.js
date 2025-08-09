const foodContainer = document.getElementById('food-Container');
const h1 =  document.createElement('h1');
h1.innerText = 'My Favorite food';


foodContainer.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Kacchi';
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText = 'Biriyani';
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText = 'Kacchi';
ul.appendChild(li3)

foodContainer.appendChild(ul)