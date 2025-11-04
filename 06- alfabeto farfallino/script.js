// Esercizio 1 (Alfabeto Farfallino)

// Scrivi un programma in JavaScript che chieda all’utente di inserire una parola
// o una frase e ne restituisca la versione tradotta secondo la regola dell’alfabeto farfallino.

// In questo linguaggio giocoso, ogni vocale della parola viene ripetuta
// e tra le due copie viene inserita la lettera "f".

// Esempio:
// Input:  ciao
// Output: cifaifao
// non dovrebbe essere: cifiafaofo ?

// scorri parola 
// trova le vocali 
// per ogni vocale 
// fai vocale + f + vocale
// restituisci una parola nuova dove le consonanti sono invariate e le vocali sostitute

const wordExample = "ciaou";

const translateWord = (word) => {
  const vowels = "aeiou";
  let translatedWord = "";
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const letterIsAVowel = vowels.includes(letter);
    if (letterIsAVowel) translatedWord += letter + "f";
    translatedWord += letter;
  }
  return translatedWord
}
console.log(translateWord(wordExample));
