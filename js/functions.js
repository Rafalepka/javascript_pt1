"use strict";



//function mnozenie(a, b) {
//    console.log(a*b);
//    
//}
//
//mnozenie(4,5);
//mnozenie(19,9);
//mnozenie(3,6);
//
//
//function wynik (liczba1, liczba2) {
//    var wynik = liczba1 * liczba2;
//    console.log("Wynik mnozenia liczb wynosi " + wynik);
//}
//
//wynik(2,3);
//wynik(3,4);
//wynik(6,5);



function mnozenie(a, b) {
    var wynik = a * b;
    return wynik;
}

var zmIloczyn1, zmIloczyn2;

zmIloczyn1 = 5;
zmIloczyn2 = 8;

var wyswietl_wyn1 = mnozenie(5,8);
document.write(" <br> Wynik mnozenia " + zmIloczyn1 + " i " + zmIloczyn2 + "wynosi " +wyswietl_wyn1 + ".");

/*

var wyswietl_wyn1 = mnozenie(3, 4);
document.write("Pierwszy wynik mnozenia wynosi " +wyswietl_wyn1 + ".");
 wyswietl_wyn1 = mnozenie(3, 44);
document.write(" <br> Drugi wynik mnozenia wynosi " +wyswietl_wyn1 + ".");

*/
