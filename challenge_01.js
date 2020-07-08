
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Promt-Anforderung eine Zahl ein
Geben Sie über eine Promt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/


var x = prompt("Erste Zahl eingeben:");
var y = prompt("Zweite Zahl eingeben:");

// Variablentypen ändern
// Umwandlungsfunktion = keine automatische Umwandlung!
// Bsp.: parseFloat () = Wandelt Text in einen Fließkommawert um.
// Achtung: Bei Javascript ist das Fließkomma IMMER ein Punkt!

var summe = parseFloat(x) + parseFloat(y);

console.log(summe);

// alert (summe);

output = document.getElementById ("output");
output.innerHTML = summe;