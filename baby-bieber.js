"use strict";
const searchedWord = 'yeah';
function hasWord(lyrics) {
    return lyrics.some(line => line.includes(searchedWord));
}
// Use `bieberBaby` directly (no import needed)
console.log(hasWord(bieberBaby));

function numWordInstance(lyrics) {
    return lyrics.reduce((count, line) => count + (line.match(new RegExp(searchedWord, 'gi')) || []).length, 0);
}
console.log(numWordInstance(bieberBaby));
