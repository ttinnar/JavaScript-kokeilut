'use strict'

let numbers = []
let number = 1

while (number !== 0) {
	numbers.push(number)
  number = parseInt(prompt('Anna numero:'));
}
numbers.sort((a,b) => a-b);
console.log(numbers)

