'use strict'

const lkm = prompt('Montako osallistujaa?')

const osallistujat = [];

for (let i = 0; i < lkm; i++) {
  osallistujat.push(prompt(`Anna ${i + 1}, osallistujan nimi`));
}

for (let osallistuja of osallistujat) {
  document.querySelector('#target').innerHTML += `<li>${osallistuja}</li>`
}