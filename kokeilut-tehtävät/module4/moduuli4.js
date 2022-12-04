'use strict '
const form =document.querySelector('form');
const section = document.querySelector('section');

async function fetchJson(url, option = {}) {
  let answer = await fetch(url, option);
  if (!answer.ok) {
    throw new Error(answer.statusText);
  }
  return await answer.json();
}

form.addEventListener('submit', async function(evt){
  section.innerText = ``;
  evt.preventDefault();
  const q = document.querySelector('#query').value;
  const search = 'https://api.tvmaze.com/search/shows?q=' + q;
  const json = await fetchJson(search);

  for(let i in json) {
    console.log(json[i]['show']['name']);
  }

  for (let i in json){
    const article = document.createElement('article');
    const img = document.createElement('img');
    const genres = document.createElement('p');
    const button = document.createElement('button');
    let title = json[i]['show']['name'];

    (json[i]['show']['genres'].length === 0) ?
        genres.innerHTML = 'genre not available':
        genres.append(json[i]['show']['genres'].join('|'));

    if (json[i]['show']['image'] === null){
      img.src = 'https://via.placeholder.com/100x150?text=no+image'
    } else if (json[i]['show']['image']['medium'] === null) {
      img.src = 'https://via.placeholder.com/100x150?text=no+image'
    } else {
      img.src = json[i]['show']['image']['medium'];
    }
    img.alt = 'picture of the show'

    article.innerHTML += `<h2>${title}</h2>`;
    article.append(genres)
    article.appendChild(img);
    article.innerHTML += json[i]['show']['summary'];
    article.appendChild(button);
    section.appendChild(article);

    button.setAttribute('type', 'button');
    button.append('click here for more info');
    const iframe = document.querySelector('iframe');
    const dialog = document.querySelector('dialog');
    const span = document.querySelector('span');

    button.addEventListener('click', function(evt){
      evt.preventDefault();
      dialog.showModal();
      iframe.src = json[i]['show']['url'];
    });

    span.addEventListener('click', function(evt){
      evt.preventDefault();
      dialog.close();
    });

  }
});