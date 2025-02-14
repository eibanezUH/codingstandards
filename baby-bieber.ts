const searchedWord: string = 'yeah';

function hasWord(lyrics: string[]): boolean {
  return lyrics.some(line => line.includes(searchedWord));
}

// Use `bieberBaby` directly (no import needed)
console.log(hasWord(bieberBaby));

function numWordInstance(lyrics: string[]): number {
  return lyrics.reduce((count, line) => count + (line.match(new RegExp(searchedWord, 'gi')) || []).length, 0);
}
console.log(numWordInstance(bieberBaby));
