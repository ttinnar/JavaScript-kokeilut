'use strick';

// Kysyy monta ehdokasta
const ehdokkaatLKM = prompt('Montako ehdokasta?')

// silmukka alkaa
// kysyy ehdokkaiden nimiä
// Laita ehdokkaiden nimet ja äänimäärä listaan(ARRAY)
// silmukka loppuu
const ehdokkaat = [];
for (let i = 1; i <= ehdokkaatLKM; i++) {
  ehdokkaat.push(prompt(`Syötä ${i} ehdokkaan nimi`));

console.log(ehdokkaat)

//Kysyy monta äänestäjää on

const votersLKM = prompt('Monta äänestäjää?')

// silmukka (äänestäjien lkm)
// Kysyy ketä jokainen äänestää
// toinen silmukka (ehdokkaat)
// jos (ääni = ehdokas.name)
// kasvata ehdokas.vote yhdellä

  const votes = [];
for (let i = 1; i <= votersLKM; i++) {
  votes.push(prompt(`Ketä ${i} äänestäjä äänestävät?`))
}}
console.log(votes)

// You need to compare votes so console log a and b to see how to get the correct property.
// someArray.sort((a, b)=> {
//   console.log(a, b);
//   return b - a;
// });