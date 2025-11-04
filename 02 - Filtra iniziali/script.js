/* Scrivi una funzione che accetti un'array di stringhe e una lettera
 che restituisca un array contenente solo le parole che iniziano con quella lettera 
*/

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


const filterByInitial = (array, letter) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const curName = array[i];
    if (curName[0] === letter) {
      filteredArray.push(curName)
    }
  }
  return filteredArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filterByInitial(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]