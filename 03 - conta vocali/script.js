/* Scrivi una funzione che accetti una stringa
 e restituisca il numero di vocali contenute al suo interno 
 */

const wordExample = 'javascript';


// Dichiara la funzione qui.

const countVowels = (word) => {
  let vowelsCount = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) vowelsCount++;
  }
  return vowelsCount;
};

// oppure

const countVowelsTwo = (word) => {
  const vowels = "aeiou";

  let vowelsCount = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterIsAVowel = vowels.includes(letter);

    if (letterIsAVowel) vowelsCount++;
  }

  return vowelsCount;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(wordExample));
console.log(countVowelsTwo(wordExample));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)