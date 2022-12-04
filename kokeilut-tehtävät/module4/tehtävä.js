'use strict';

const section = document.querySelector('section')
const form = document.querySelector('form')

// const btn = document.getElementById('search');

async function fetchJson(url, options = {}) {
  let answer = await fetch(url, options);
  if (!answer.ok) {
    throw new Error(answer.statusText);
  }
  return await answer.json()
}

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const q = document.querySelector('#query').value;
  const proxy = 'https://api.allorigins.win/get?url=';
  const search = 'https://api.tvmaze.com/search/shows?q=' + q;
  const url = proxy + encodeURIComponent(search);
  const response = await fetchJson(url);
  const json = JSON.parse(response.contents);
  console.log(json[0]['show']['name'])

  console.log(response["contents"])
})
//

    /*
    let element = document.querySelector('#name');
    element.innerText = name;
    */
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const print = json[0]['show']['name'];
    const image = document.createElement('img');
    if (json[0]['show']['image'] === null) {
      image.src = 'https://via.placeholder.com/100x200?text=text+here'
    }
    else if (json[0]['show']['image']['medium'] === null) {
      image.src = 'https://via.placeholder.com/100x200?text=text+here'
    }
    else {
      image.src = json[0]['show']['image']['medium']
    }

    image.alt = print;
    const a = document.createElement('a')
    const print4 = json[0]['show']['url'];
    const summary = json[0]['show']['summary']
    a.setAttribute('href', print4);
    a.setAttribute('target', '_blank');
    a.append(print4);
    h2.append(print);
    p.append(summary);
    div.append(h2, image, p, a);
    section.appendChild(div)


  //display all the search results

    for (let i in json) {
      const genres = document.createElement('p');
      let title = json[i]['show']['name'];
      let prettyGenre;
      if (json[i]['show']['genres'] === '') {
        prettyGenre = 'no genre'
      }
      else {
        prettyGenre = json[i]['show']['genres'].join('l')
      }
      let summary = json[i]['show']['summary'];
      //let url = json[i]['show']['url'];


      const text = document.createElement('div');
      const img = document.createElement('img');


)};


  // searchseries();

});



// const lomake = document.querySelector('form');
// const apiUrl = 'https://api.tvmaze.com/search/shows'
//
// // Tätä funktiota voi käyttää missä vain milloin vain. KÄYTÄ
// async function fetchJson(url, options = {}) {
//   const vastaus = await fetch(url, options);
//   if (!vastaus.ok) {
//     throw new Error(vastaus.statusText);
//   }
//   return await vastaus.json();
// }
//
// lomake.addEventListener('submit', async function(evt) {
//   try {
//     evt.preventDefault();
//     const hakusana = document.querySelector('#query').value;
//     const sarjat = await fetchJson(apiUrl + hakusana);
//     console.log(sarjat);
//   } catch (e) {
//     console.error(e.message);
//   }
// });
//
//
//btn.addEventListener('click', a=> {
//   async function searchseries() {
//     let hakusana = document.getElementById('showname').value;
//     let pyynto = 'https://api.tvmaze.com/search/shows?q=' + hakusana;
//     // console.log('pyyntö: ', pyynto);
//     let response = await fetch(pyynto);
//     let json = await response.json();
//     // let name = json[0]["show"]["name"];
//     // console.log(name);
//     console.log(json)
//     for (let i in json) {
//       let name = json[i]['show']['name'];
//       let url = json[i]['show']['url'];
//       let img = json[i]['show']['image']['medium'];
//       let summary = json[i]['show']['summary'];
//       console.log(name);
//       console.log(url);
//       console.log(img);
//       console.log(summary);
//
//     }
//     return json;
//   }