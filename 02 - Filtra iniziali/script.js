/* Scrivi una funzione che accetti un'array di stringhe e una lettera
 che restituisca un array contenente solo le parole che iniziano con quella lettera 
*/

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


const filterByInitial = (words, letter) => {
  const filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word[0] === letter) filteredWords.push(word);
  }

  return filteredWords;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filterByInitial(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]