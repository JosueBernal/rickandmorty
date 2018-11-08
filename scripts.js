'use strict';

const API_URL = "https:rickandmortyapi.com/api/character";
const list = document.querySelector('.list');

function rickRequest(url){
  fetch(url)
  .then(function(respuesta){
    console.log('La Api nos respondio :)')
    return respuesta.json()
  })
  .then(function(resp){
    console.log(resp)
    printCharacters(resp.results);
    requestNextPage(resp.info);
  })
  .catch(function(){
    console.log('La Api no nos respondio t_t')
  })
}

function requestNextPage(info) {
  if(info.next == '') {
    console.log('no hay next')
  } else {
    console.log(info.next);
    rickRequest(info.next);
  }
}

rickRequest(API_URL);

function printCharacters(characters) {
  for(let character of characters) {
      list.innerHTML += `
        <li class="character ${character.type}">
          <h2>  ${character.name} </h2>
          <img src="${character.image}" >
          <p>Status: (${character.status}) </p>
          <p>Especie: ${character.species}</p>
          <p>Origen: ${character.origin.name} </p>
          <p>Genero: ${character.gender} </p>
        </li>
        `
    }
  }
