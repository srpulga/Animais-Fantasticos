// const animais = document.getElementById('animais');
//
// console.log(animais);
//
// const gridSection = document.getElementsByClassName('grid-section');
//
// console.log(gridSection[0]);
//
// const primeiraLi = document.querySelector('li');
//
// console.log(primeiraLi);
//
// const primeiraUl = document.querySelector('ul');
//
// console.log(primeiraUl);
//
// const linkInterno = document.querySelector('[href^="#"]');
//
// console.log(linkInterno);
//
// const animaisImg = document.querySelectorAll('.animais img');
//
// console.log(animaisImg);
//
// primeiraUl.classList.add('grid-section');
//
// const gridSectionHtml = document.getElementsByClassName('grid-section');
//
// console.log(gridSectionHtml);
//
// const gridSectionNode = document.querySelectorAll('.grid-section');
//
// console.log(gridSectionNode);
//
// gridSectionNode.forEach(function (item, index) {
//     console.log(item, index);
// })
//
// const arrayGrid = Array.from(gridSectionHtml);
//
// console.log(arrayGrid);
//
// arrayGrid.forEach(function (item, index) {
//     console.log(item, index);
// })
//
//
// const menu = document.querySelector(".menu");
//
// menu.classList.add('ativo');
// menu.classList.remove('azul');
// menu.classList.toggle('azul');
//
// if(menu.classList.contains('azul')) {
//     menu.classList.add('possui-azul');
// } else {
//     menu.classList.add('nao possui azul ');
// }
//
// menu.className += ' vermelho';
//
// console.log(menu.className);
//
// console.log(animais.attributes[0]);
//
//
// const animal = document.querySelector('.animais');
//
// console.log(animal.attributes['data-texto']);
//
// const img = document.querySelector('img');
//
// console.log(img.getAttribute('src'));
//
// img.setAttribute('alt', 'salve caralho');
//
// const possuiAlt = img.hasAttribute('alt', 'salve caralho');
//
// console.log(possuiAlt);
//
// const listaAnimais = document.querySelector('.animais-lista'); //metodo verde
//
// const heigth = listaAnimais.scrollHeight; //proprierade laranja
//
// console.log(heigth);
//
// const animaisTop = listaAnimais.offsetTop;
//
// console.log(animaisTop);
//
// const primeiroh2 = document.querySelector('h2');
//
// const h2left = primeiroh2.offsetLeft;
//
// console.log(h2left);
//
// const h2rect = primeiroh2.getBoundingClientRect();
//
// console.log(h2rect.top);
//
// console.log(
//     window.innerWidth,
//     window.outerHeight,
//     window.innerHeight,
//     window.outerHeight,
//     window.pageYOffset,
//     window.pageXOffset
// );
//
// if(h2rect.top < 0) {
//
//     console.log('Passou do elemento');
// }
//
// const small = window.matchMedia('(max-width: 600px').matches;
//
// console.log(small);
//
// if(small) {
//     console.log('-600px');
// } else {
//     console.log('+600px');
// }
//
// elemento.addEventListner(event, callback, options)
//
// const img = document.querySelectorAll('img');
//
// img.forEach((im) => {
//     im.addEventListener('click', () => {
//         console.log('boa');
//     });
// });
//
// const animaisLista = document.querySelector('.animais-lista');
//
// function callbackLista(event) {
//     console.log(event.target);
// }
//
// animaisLista.addEventListener('click', callbackLista);
//
//
// const linkExterno = document.querySelector('a[href^="http"]');
//
// function handleLinkExterno(event) {
//     event.preventDefault(); //previne o padr??o, o que era pra acontecer
//     console.log(event);
// }
//
// linkExterno.addEventListener('click', handleLinkExterno);
//
// function handleImg(event) {
//     console.log(event.target);
// }
//
// img.forEach((im) => {
//     im.addEventListener('click', handleImg);
// });
//
//
// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');
//
// h1.innerHTML = '<p>SAVE</p>'
//
// const lista = document.querySelector('.animais-lista');
//
// // console.log(lista.nextElementSibling);
//
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
//
// animais.appendChild(titulo); //apprendChild vai mover para o ultimo item da lista
//
//
// const mapa = document.querySelector('.mapa');
//
//
//
// const novoh1 = document.querySelector('h1');
//
// novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('titulo');
//
//
//
// const h1 = document.querySelector('h1');
//
// const faq = document.querySelector('.faq');
//
// const cloneH1 = h1.cloneNode(true);
//
// cloneH1.classList.add('azul');
//
// faq.appendChild(cloneH1);

console.log(window);
// window ?? o objeto global do browser
// possui diferentes m??todos e propriedades
window.innerHeight; // retorna a altura do browser

window.alert('Isso ?? um alerta');
alert('Isso ?? um alerta'); // Funciona
document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// Node
// Toda tag html ?? representada pelo objeto Element e por isso herda
// os seus m??todos e propriedades. Element ?? um tipo de objeto Node.

const titulo = document.querySelector('h1');
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;
titulo.addEventListener('click', callback);
// ativa a fun????o callback ao click no titulo

//getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso n??o exista
const naoExiste = document.getElementById('teste');

// getElementsByClassName e getElementsByTagName
// selecionam e retornam uma lista de elementos do DOM. A lista retornada est?? ao vivo, significa que se elementos forem
// adicionados, ela ser?? automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section')
const contato = document.getElementsByClassName('grid-section con')

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

// querySelector retorna o primeiro elemento que combinar com o seu seletor CS
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child)
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

//querySelectorAll retorna todos os elementos compat??veis
//com o seletor CSS em uma NodeList

const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');

const fotosAnimais = document.querySelectorAll('.animais-lista img')

// Retorna o segundo elemento
console.log(gridSection[1]);

//HTMLCollection vs NodeList
// A diferen??a est?? nos m??todos e propriedades de ambas. Al??m disso a NodeList retornada com querySelectorAll ?? est??tica

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

//Array-Like
// HTMLCollection e NodeList s??o array-like, parecem uma array mas n??o s??o. O m??todo de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array) {
    gridItem.classList.add('azul');
    console.log(index) // index do item na array
    console.log(array) // a array completa
});

//?? poss??vel transformar arraylike em uma Array real, utilizando o m??todo Array.from(gridSection)

//forEach
// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos ?? utilizando o m??todo forEach.

const imgs = document.querySelectorAll('img');
imgs.forEach(function(item){
    console.log(item);
});

//Par??metros do forEach
// O primeiro par??metro ?? o callback, ou seja, a fun????o que ser?? ativada a cada item. Esse fun????o pode receber tr??s par??metros: valorAtual, index e array;

const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
    console.log(item); // o item atual no loop
    console.log(index); // o n??mero do index
    console.log(array); // a Array completa
});

//forEach e Array
// forEach ?? um m??todo de Array, alguns objetos array-like possuem este m??todo. Caso n??o possua, o ideal ?? transform??-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
    console.log(item);
});

//Arrow Function
// Sintaxe curta em rela????o a function expression . Basta remover a palavra chave function e adicionar a fat arrow => ap??s os argumentos.

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
    console.log(item);
});

//Argumentos e Par??nteses

const imgs = document.querySelectorAll('img');
// argumento ??nico n??o precisa de par??nteses
imgs.forEach(item => {
    console.log(item);
});

// multiplos argumentos precisam de par??nteses
imgs.forEach((item, index) => {
    console.log(item, index);
});

// sem argumentos precisa dos par??nteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

//Return
// ?? poss??vel omitir as chaves {} para uma fun????o que retorna uma linha.

const imgs = document.querySelectorAll('img');
imgs.forEach(item =>
    console.log(item)
);

imgs.forEach(item => console.log(item));

//classList
// Retorna uma lista com as classes do elemento. Permite adicionar,
// remover e verificar se cont??m.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

//attributes
// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

//getAttribute e setAttribute
// M??todos que retornam ou denem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

//Read Only vs Writable
// Existem propriedades que n??o permitem a mudan??a de seus valores, essas s??o considerados Read Only, ou seja, apenas leitura.

const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho ?? string

animais.attributes = 'class="ativo"'; // n??o funciona, read-only

// Height e Width
// Estas s??o propriedades e m??todos dos objetos Element e HTMLElement , a maioria delas s??o Read Only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//osetTop e osetLeft

const section = document.querySelector('.animais');

// Dist??ncia entre o topo do elemento e o topo da p??gina
section.offsetTop;

// Dist??ncia entre o canto esquerdo do elemento
// e o canto esquerdo da p??gina
section.offsetLeft;

// getBoundingClientRect()
// M??todo que retorna um objeto com valores de width, height, dist??ncias do elemento e mais.

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // dist??ncia entre o topo do elemento e o scroll

// Window

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools tamb??m
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endere??o

window.pageYOffset; // dist??ncia total do scroll horizontal
window.pageXOffset; // dist??ncia total do scroll vertical

if(window.innerWidth < 600) {
    console.log('Tela menor que 600px');
}

//matchMedia();
// Utilize um media-querie como no CSS para vericar a largura do broswer

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}

//addEventListener
// Adiciona uma fun????o ao elemento, esta chamada de callback , que ser?? ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
    console.log('Clicou');
})

//Callback
// ?? boa pr??tica separar a fun????o de callback do addEventListener, ou seja, declarar uma fun????o ao inv??s de passar diretamente uma fun????o an??nima

const img = document.querySelector('img');

function callback() {
    console.log('Clicou');
}

img.addEventListener('click', callback); //
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
    console.log('Clicou');
})
img.addEventListener('click', () => {
    console.log('Clicou');
})

//Event
// O primeiro par??metro do callback ?? referente ao evento que ocorreu.

const img = document.querySelector('img');

function callback(event) {
    console.log(event);
}

img.addEventListener('click', callback);

//Propriedades do Event

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
    const currentTarget = event.currentTarget; // this
    const target = event.target; // onde o clique ocorreu
    const type = event.type; // tipo de evento
    const path = event.path;
    console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

//event.preventDefault()
// Previne o comportamento padr??o do evento no browser. No caso de um link externo, por exemplo, ir?? previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
    event.preventDefault();
    console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

//this
// A palavra chave this ?? uma palavra especial de JavaScript, que pode fazer refer??ncia a diferentes objetos dependendo do contexto. No caso de eventos, ela far??
// refer??ncia ao elemento em que addEventListener foi adicionado.

const img = document.querySelector('img');

function callback(event) {
    console.log(this); // retorna a imagem
    console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

//Diferentes Eventos

//Existem diversos eventos como click , scroll , resize , keydown , keyup , mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document tamb??m.

const h1 = document.querySelector('h1');

function callback(event) {
    console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

//Keyboard
// Voc?? pode adicionar atalhos para facilitar a navega????o no seu site, atrav??s de eventos do keyboard .

function handleKeyboard(event) {
    if(event.key === 'a')
        document.body.classList.toggle('azul');
    else if(event.key === 'v')
        document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', callback);

//forEach e Eventos
// O m??todo addEventListener ?? adicionado ?? um ??nico elemento, ent??o ?? necess??rio um loop entre elementos de uma lista, para adicionarmos ?? cada um deles.

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
});

//Adicionar Classes para Manipula????o
// A ideia de navega????o por tabs, ?? ter uma lista de itens que controla a visualiza????o de uma lista de conte??do. Cada item da lista possui um conte??do relacionado ao mesmo.

<!-- Primeiro, adicionar classes que ir??o
facilitar a manipula????o dos elementos -->
<ul class="animais-lista js-tabmenu">
    ...
</ul>
<div class="animais-descricao js-tabcontent">
    ...
</div>

//Selecionar os itens

const tabMenu = document.querySelectorAll('js-tabmenu li');
const tabContent = document.querySelectorAll('js-tabmenusection');

//Fun????o Callback
// Recebe index como par??metro para ativar a tab. Sempre que ativar, remove a classe ativo de todos os outros elementos.

function activeTab(index) {
    tabContent.forEach((content) => {
        content.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
}

//Adicionar o Evento
// Neste caso precisamos passar antes a fu????o an??nima no callback, para podermos passar o index como argumento de activeTab

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    });
});

//Assim que Carregar
// Adicionar a classe ativo ao primeiro elemento e adicionar a classe js ao html. Assim identicamos se o JavaScript est?? habilitado ou n??o.

<!-- No head do borwser -->
<script>document.documentElement.className += ' js';</script>

// Verificar se existe elemento em tabContent e tabMenu
if(tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');
...
}

//Anima????o com CSS
// Anima????o simples com css, sai de display none para display block.

.js .js-tabcontent section {
    display: none;
}
.js-tabcontent section.ativo {
    display: block !important;
    animation: show .5s forwards;
}
@keyframes show {
    from {
        opacity: 0;
        transform: translate3d(-30px, 0, 0);
    }
    to {
        opacity: 1;
        transform: translate3d(0px, 0, 0);
    }
}


