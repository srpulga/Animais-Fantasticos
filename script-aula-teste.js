const animais = document.getElementById('animais');

console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');

console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');

console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');

console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');

console.log(animaisImg);

primeiraUl.classList.add('grid-section');

const gridSectionHtml = document.getElementsByClassName('grid-section');

console.log(gridSectionHtml);

const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
    console.log(item, index);
})

const arrayGrid = Array.from(gridSectionHtml);

console.log(arrayGrid);

arrayGrid.forEach(function (item, index) {
    console.log(item, index);
})


const menu = document.querySelector(".menu");

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao possui azul ');
}

menu.className += ' vermelho';

console.log(menu.className);

console.log(animais.attributes[0]);


const animal = document.querySelector('.animais');

console.log(animal.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));

img.setAttribute('alt', 'salve caralho');

const possuiAlt = img.hasAttribute('alt', 'salve caralho');

console.log(possuiAlt);

const listaAnimais = document.querySelector('.animais-lista'); //metodo verde

const heigth = listaAnimais.scrollHeight; //proprierade laranja

console.log(heigth);

const animaisTop = listaAnimais.offsetTop;

console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');

const h2left = primeiroh2.offsetLeft;

console.log(h2left);

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top);

console.log(
    window.innerWidth,
    window.outerHeight,
    window.innerHeight,
    window.outerHeight,
    window.pageYOffset,
    window.pageXOffset
);

if(h2rect.top < 0) {

    console.log('Passou do elemento');
}

const small = window.matchMedia('(max-width: 600px').matches;

console.log(small);

if(small) {
    console.log('-600px');
} else {
    console.log('+600px');
}

elemento.addEventListner(event, callback, options)

const img = document.querySelectorAll('img');

img.forEach((im) => {
    im.addEventListener('click', () => {
        console.log('boa');
    });
});

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);


const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault(); //previne o padrão, o que era pra acontecer
    console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);

function handleImg(event) {
    console.log(event.target);
}

img.forEach((im) => {
    im.addEventListener('click', handleImg);
});


const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

h1.innerHTML = '<p>SAVE</p>'

const lista = document.querySelector('.animais-lista');

// console.log(lista.nextElementSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

animais.appendChild(titulo); //apprendChild vai mover para o ultimo item da lista


const mapa = document.querySelector('.mapa');



const novoh1 = document.querySelector('h1');

novoh1.innerText = 'Novo Titulo';
novoh1.classList.add('titulo');



const h1 = document.querySelector('h1');

const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul');

faq.appendChild(cloneH1);