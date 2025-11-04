/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

const getGreetingType = () => {
  let greeting;
  const now = new Date();
  const hour = now.getHours();
  if (hour < 13) greeting = "Buongiorno";
  if (hour > 13 && hour < 17) greeting = "Buon pomeriggio";
  if (hour > 17) greeting = "Buonasera";
  return greeting
}

const printGreeting = (name) => getGreetingType() + " " + name;

// Invoca la funzione qui e stampa il risultato in console

console.log(printGreeting(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.