'use strict'

const numerot = []
for (let i = 1; i <= 5; i++) {
  numerot.push(prompt(`Syötä ${i} numero`));
}

for (let i= numerot.length -1; i > -1; i--) {
  console.log(`${numerot[i]}`);
}