var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = [];
allNames = allNames.concat(femaleNames, maleNames);
console.log(allNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	console.log(allNames);
}
