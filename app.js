"use strict"

const arr = [1, 2, 3, 4, 5, 6];
const alphabet = ["f", "a", "c", "v", "z"];

// sort in descending order
const descending = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descending);

// sort in ascending order
const ascending = alphabet.sort((a, b) => a > b ? 1 : -1)
console.log(ascending);