// Scrivi una funzione JavaScript chiamata myCompress 
// che riceve come parametro una stringa e restituisce una nuova stringa 
// in cui le sequenze di caratteri ripetuti consecutivamente vengono compresse.

// Ogni gruppo di caratteri uguali deve essere rappresentato dal carattere stesso 
// seguito dal numero di ripetizioni racchiuso tra parentesi angolari (< >), 
// solo se la ripetizione è maggiore di 1.

// La funzione deve restituire la stringa compressa risultante.

// Esempio di comportamento atteso:
// myCompress('Haapppy Codiiiiinnnng')
// // Output: "Ha<2>p<3>y Codi<5>n<4>g"

const wordExample = "Haapppy Codiiiiinnnng";


const formatWord = (word) => {
  let countDuplicates = 1;
  let formattedWord = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letter === word[i + 1]) countDuplicates++;
    else {
      formattedWord += letter;
      if (countDuplicates > 1) formattedWord += `<${countDuplicates}>`;
      countDuplicates = 1;
    }
  }
  return formattedWord
}


console.log(formatWord(wordExample));
