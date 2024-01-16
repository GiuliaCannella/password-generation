// console.log("js ok");

/*
 Chiedi all'utente il suo nome
 Chiedi poi il suo cognome
 Chiedi il colore preferito
 Infine stampa la stringa in questo modo:
  nomecognomecolorepreferito21!
*/

const nomeUser= prompt("scrivi il tuo nome","Giulia");
const cognomeUser= prompt("scrivi il tuo cognome", "Cannella")
const coloreUser= prompt("scrivi il tuo colore preferito", "rosso")
const dati=nomeUser+cognomeUser+coloreUser+"21!"

console.log(typeof(nomeUser), 'Nome user');
console.log(typeof(cognomeUser), 'Cognome user');
console.log(typeof(coloreUser), 'Colore');

console.log(dati);
