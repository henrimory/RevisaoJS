//1ºbusca por ID

const animais = document.getElementById('animais');
console.log(animais);

//2ºclasses

const gridSelect = document.getElementsByClassName('grid-section');
console.log(gridSelect);

//3º - Tag
const myUl = document.getElementsByTagName('ul');
console.log(myUl[1]);

//4º - Seletor geral - query selector
const firstLi = document.querySelector('li');
console.log(firstLi);

const lastLi = document.querySelector('.animais li:last-child');
console.log(lastLi);

const myId = document.querySelector('#faq');
console.log(myId);

//5º seletor de todos os elementos = querySelectorall
const allParagraph = document.querySelectorAll('p');
console.log(allParagraph);

const arrayParagraph = Array.from(allParagraph);
console.log(arrayParagraph);

console.log(arrayParagraph[0].textContent);
arrayParagraph[0].textContent = 'Alterando o conteudo do paragrafo';
//selecionando o primeiro elemento da classe ativo
const ativo = document.getElementsByClassName('ativo');
console.log(ativo);

//retornando todas as imagens
const allImages= document.querySelectorAll('img');
console.log(allImages);
//selecionando o primeiro h2 em animais-descrição
const animalsSelect = document.querySelector('.animais-descricao h2:first-child');
console.log(animalsSelect);
//último paragrafo do site
const ultimoParagraph = document.querySelector('p:last-child');
console.log(ultimoParagraph);



