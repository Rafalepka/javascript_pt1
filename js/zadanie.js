/*Mamy tablice z elementami od 2 do 8
funkcja ktora doda kazdy element z funkcji i zwroci wynik

*/

'use strict';

var tablica = [2,3,4,5,6,7,8];

/*console.log(tablica);

var sum = tablica.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);*/



/*
var count = 0;
for(var i = 0; i < tablica.length; i++)
{
    
    //count = count + tablica[i] - normalny sposob
    count += tablica[i]; //+= szybszy sposob dodania elementu
}

console.log(count);
*/

function sumaTablicy() {
    var suma = 0;
    for (var i=0; i<tablica.length; ++i) {
        suma += tablica[i];
    }
    return suma;
}

console.log(sumaTablicy());




