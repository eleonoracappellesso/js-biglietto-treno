"use strict";

console.clear();

/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

const priceKm = 0.21;
const juniorDiscount = 20;
const seniorDiscount = 40;
const junior = 17;
const senior = 65;

const totKm = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(totKm);


const passengerAge = parseInt(prompt("Quanti anni ha il passeggero?"));
console.log(passengerAge);

const totPrice = totKm * priceKm;
console.log(totPrice);

let message;
let finalPrice;

if (passengerAge <= junior) {
    finalPrice = totPrice - ((totPrice * juniorDiscount) / 100);
    message = "E' stato applicato uno sconto del 20% riservato ai minorenni. Il costo finale del tuo biglietto è di €" + finalPrice.toFixed(2);
} else if (passengerAge >= senior) {
    finalPrice = totPrice - ((totPrice * seniorDiscount) / 100); 
    message = "E' stato applicato uno sconto del 40% riservato agli over 65. Il costo finale del tuo biglietto è di €" + finalPrice.toFixed(2);
} else {
    message = "Il costo del tuo biglietto è di €" + totPrice.toFixed(2);
}

console.log(message);
