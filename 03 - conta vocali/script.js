/* Scrivi una funzione che accetti una stringa
 e restituisca il numero di vocali contenute al suo interno 
 */

const word = 'javascript';


// Dichiara la funzione qui.

const countVowels = (word) => {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    let curLetter = word[i];
    if (curLetter === "a" || curLetter === "e" || curLetter === "i" || curLetter === "o" || curLetter === "u") {
      result++;
    }
  }
  return result
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)