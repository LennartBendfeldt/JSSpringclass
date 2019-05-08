const coffee = document.querySelector('li').nextElementSibling;

coffee.innerHTML = 'free trade coffee';

coffee.nextElementSibling.nextElementSibling.remove();

const addCheez = document.createElement('li');
addCheez.innerHTML = 'Cheeze Whiz';

const list = document.querySelector('ul');
list.appendChild(addCheez);

const array  = ['protein powder', 'muscle milk', 'power bars'];

[...list.children].forEach( e => e.remove());

array.forEach(e => {
    let item = document.createElement('li');
    item.textContent = e;

    list.appendChild(item);
})

const musclemilk = document.querySelector('ul');


console.log(coffee);