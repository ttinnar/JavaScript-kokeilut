'use strict';
const lomake = document.querySelector('form');
const apiUrl = 'https://api.tvmaze.com/search/shows'

// Tätä funktiota voi käyttää missä vain milloin vain. KÄYTÄ
async function fetchJson(url, options = {}) {
  const vastaus = await fetch(url, options);
  if (!vastaus.ok) {
    throw new Error(vastaus.statusText);
  }
  return await vastaus.json();
}

lomake.addEventListener('submit', async function(evt) {
  try {
    evt.preventDefault();
    const hakusana = document.querySelector('#query').value;
    const sarjat = await fetchJson(apiUrl + hakusana);
    console.log(sarjat);
  } catch (e) {
    console.error(e.message);
  }
});