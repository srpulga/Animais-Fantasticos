//
// //Retorne no console todas as imagens do site
//
// const imagens = document.querySelectorAll('img');
//
// console.log(imagens);
//
// //Retorne no console apenas as imagens que começam com a palavra imagem
//
// const imagensI = document.querySelectorAll('img[src^="img/imagem"]');
//
// console.log(imagensI);
//
// //Retorne no console todos os links insternos onde o href começa com #
//
// const link = document.querySelectorAll('[href^="#"]');  // ^= comaça com
//
// console.log(link);
//
// //Selecione o primeiro h2 dentro de .animais-descricao
//
// const h2Animais = document.querySelector('.animais-descricao h2');
//
// console.log(h2Animais);
//
// //Selecione o ultimo p do site
//
// const ultimop = document.querySelector('p');
//
// console.log(ultimop[ultimop.length - 1]);
//
// // mostre no console cada parágrafo do site
// const imgs = document.querySelectorAll('img');
// const ps = document.querySelectorAll('p');
//
// ps.forEach(item => console.log(item));
//
//
// // mostre o texto dos parágrafos no console
//
// ps.forEach(item => console.log(item.innerText));
//
// // como corrigir os erros abaixo:
//
//
// imgs.forEach((item, index ) => {
//     console.log(item, index)
// });
//
// let i = 0;
//
// imgs.forEach(() => {
//     console.log(i++);
// });
//
// imgs.forEach(() => i++);
//
// //Adicione a classe ativo em todos os itens do menu
//
// const menu = document.querySelectorAll(".menu a");
//
// menu.forEach((item) => {
//     item.classList.add('ativo')
// })
//
// //Remove a classe ativo de todos os itens do menu e mantenha apenas o primeiro
//
// menu.forEach((item) => {
//     item.classList.remove('ativo');
// });
//
// menu[0].classList.add('ativo');
//
//
// //verifique se as imagens possuem o atributo alt
//
// const img = document.querySelectorAll('img');
//
// img.forEach(img => {
//     console.log(img.hasAttribute('alt'));
// })
//
// //modifique o href do link externo no menu
//
// const link = document.querySelector('a[href^="http"]');
//
// link.setAttribute('href', 'https://www.origamid.com');
//
// //verifique a distancia da primeira imagem em relação ao  topo da pagina
//
// const img = document.querySelector('img');
//
// const distanciaTopo = img.offsetTop;
//
// console.log(distanciaTopo);
//
// //retorne a soma da largura de todas as imagens;
//
// const imgs = document.querySelectorAll('img');
// let soma = 0;
//
// const somaimagem = () => {
//     imgs.forEach(img => {
//         soma += img.offsetWidth;
//     })
//     console.log(soma);
// }
//
// window.onload = () => {
//     somaimagem();
// };
//
//
// //verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo (48px48px
//
// const links = document.querySelectorAll('a');
//
// links.forEach(link => {
//     const linkWidth = link.offsetWidth;
//     const linkHeight = link.offsetHeight;
//
//     if(linkWidth >= 48 && linkWidth >= 48 ) {
//         console.log('Possui acessibilidade');
//     } else {
//         console.log('Nao possui acessibilidade');
//     }
//
// });
//
// // se o  browser for menor que 720px adicione a classe menu-mobile ao menu
//
// const browserSmall = window.matchMedia('(max-width: 720px)').matches;
//
// if(browserSmall) {
//     const menu = document.querySelector('.menu');
//     menu.classList.add('menu-mobile');
// }
//
// //Quando o usuário clicar nos links internos do site, adicione a classe
// // ativo ao item clicado e remova dos demais itens caso eles possuam a
// // mesma. previna o comportamento padrão desses links
//
// const linkInternos = document.querySelectorAll('a[href^="#"]');
//
// function handleClick(event) {
//     event.preventDefault();
//     linkInternos.forEach( (link)=> {
//         link.classList.remove('ativo');
//     });
//     event.currentTarget.classList.add('ativo'); //da pra usar this tbm
// }
//
// linkInternos.forEach( (linkInterno) => {
//     linkInterno.addEventListener('click', handleClick);
// });
//
// //selecione todos os elementos do site começando a partir do body
// //ao clique mostre exatamente quais elementos estão sendo clicados
//
// const todosElementos = document.querySelectorAll('body *');
//
// function handleElemento(event) {
//     console.log(event.currentTarget);
// }
//
// todosElementos.forEach(todoElemento => {
//     todoElemento.addEventListener('click', handleElemento)
// })
//
// //utilizando o codigo anterior, ao inves de mostrar no console
// // remova o elemento que está sendo clicado, o metodo remove() remove um elemento
//
//
// function handleElemento(event) {
//     event.currentTarget.remove();
// }
//
// todosElementos.forEach(todoElemento => {
//     todoElemento.addEventListener('click', handleElemento)
// })
//
// //se o usuario clicar na tecla t, aumentar texto
//
// function handleClickT(event) {
//     if(event.key == 't'){
//         document.documentElement.classList.toggle('textoMaior');
//     }
// }
//
// window.addEventListener('keydown', handleClickT);
//
// //Duplique o menu e adicione ele em copy
//
// const menu = document.querySelector('.menu');
// const copy = document.querySelector('.copy');
//
// const cloneMenu = menu.cloneNode(true);
//
// copy.appendChild(cloneMenu);
//
// //selecione o primeiro dt da dl de faq
//
// const faq = document.querySelector('.faq');
// const primeiroDt = faq.querySelector('dt');
//
// const proximoDD = primeiroDt.nextElementSibling;
//
// console.log(proximoDD);
//
// //substitua o conteudo html de faq por animasi
//
// const animais = document.querySelector('.animais');
//
// faq.innerHTML = animais.innerHTML;

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
const windowWidth = window.innerWidth;
console.log(windowWidth);

// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');

console.log(animais);
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);

// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//   // console.log(item, index, array)
// });

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
    // console.log(item, index, array);
});

const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach((item) => {
//   console.log(i++)
// });

let i = 0;
imgs.forEach(function() {
    console.log(i++)
});

imgs.forEach(() => console.log(i++));

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
})


// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

console.log(link);

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma += imagem.offsetWidth;
    });
    console.log(soma);
}

window.onload = function() {
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    event.currentTarget.remove();
}

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handleElemento);
// })

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
    console.log(event.key);
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}

window.addEventListener('keydown', handleClickT);

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');


// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;

console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;


