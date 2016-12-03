"use strict";

var liczba1 = 50;
var kolory = ['zółty', 'pomarańczowy', 'łososiowy'];

console.log(kolory[1]);

kolory[3] = "zielony";

kolory.push("czerwony"); //dodaje na koniec tablicy

console.log(kolory);
kolory.pop(); // usuwa ostatni element

console.log(kolory);
var dlugoscTablicy; // zmienna dlugosc tablicy
dlugoscTablicy = kolory.unshift("bialy"); // dodaje na poczatek kolor
//funcja unshift ma sama w sobie parametr return, zeby zwrocic jego wartosc nalezy zadeklarowac zmienna ktora za to odpowie.

/*var uniwersalnaZmienna;
console.log(dlugoscTablicy);
console.log(kolory);

kolory.shift(); // usuwa 1 element w tablicy

console.log(kolory);

console.log(kolory.length); // lenght zwraca dlugosc tablicy

/*
for (var i = 0; i < kolory.length; ++i) {
    console.log(i);
    console.log(kolory[i]);
}

kolory.forEach ( function (el, i) {
                console.log("Numer koloru " + i + " i jego nazwa to " + el);
                });

var sklejamTablice = kolory.join(" , "); // skleja tablice w ciag znakow

console.log(sklejamTablice);

kolory.reverse();*/
/*
console.log(kolory);

uniwersalnaZmienna = kolory.sort();
console.log (uniwersalnaZmienna);*/

var kolory2 = ['niebieski','granatowy','aqua', 'granatowy'];
console.log(kolory2);

console.log(kolory2.concat(kolory));