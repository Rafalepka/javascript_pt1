/*Mamy tablice z elementami od 2 do 8
funkcja ktora doda kazdy element z funkcji i zwroci wynik

*/

'use strict';

/*var tablica = [2, 3, 4, 5, 6, 7, 8];

console.log(tablica);

var sum = tablica.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum);



var count = 0;
for(var i = 0; i < tablica.length; i++)
{
    
    //count = count + tablica[i] - normalny sposob
    count += tablica[i]; //+= szybszy sposob dodania elementu
}

console.log(count);

function sumaTablicy() {
    var suma = 0;
    for (var i = 0; i < tablica.length; ++i) {
        suma += tablica[i];
    }
    return suma;
}

console.log(sumaTablicy());*/


/*
function Osoba(imie) {
    this.imie = imie;
    this.nazwisko;
    this.wzrost;
    this.oczy;
    this.wyswietlInfo = function() {
        console.log ("Imię " + this.imie + "\n"
                     + "Nazwisko " + this.nazwisko + "\n"
                     + "Wzrost " + this.wzrost + "\n" 
                     + "Kolor oczu " + this.oczy + "\n");
    }
}

var Rafal = new Osoba('Rafał');
Rafal.nazwisko = "Matałowski";
Rafal.wzrost = 195;
Rafal.oczy = "blizej nieokreslone";
Rafal.wyswietlInfo();
JSON - Javascript Object Notacion

*/

function Samolot(producent) {
    this.producent = producent;
    this.model;
    this.rok_produkcji;
    this.getInfo = function(){
        console.log ("Samolot którego producentem jest " + this.producent + " model " + this.model + " został wyprodukowany w " + this.rok_produkcji + " roku.");
    }
}

var boeing = new Samolot('Boeing');
boeing.model = "787";
boeing.rok_produkcji = "2015";
boeing.getInfo();


var airbus = new Samolot("Airbus");
airbus.model = "A350";
airbus.rok_produkcji = "2016";
airbus.getInfo();