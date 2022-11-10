'use strick'

//vähennetään toistoa (const x6) niin käytetään for
//PYTHON for i in range(0, 6, 1):
//koirat.append(input('syötä koiran nimi'))
const koirat = [];
for (let i = 1; i <= 6; i++) {
  koirat.push(prompt(`Syötä ${i} koiran nimi`));
}
koirat.sort();
koirat.reverse();

//let i = 0; i < koirat.length; i++
for (let koira of koirat) {
  document.getElementById('target').innerHTML += `<li>${koira}</li>`;
}