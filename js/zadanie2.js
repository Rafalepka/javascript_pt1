'use strict';

/*function Samolot(producent) {
    this.producent = producent;
    this.model;
    this.rok_produkcji;
    this.getInfo = function(){
        console.log ("Samolot którego producentem jest " + this.producent + " model " + this.model + " został wyprodukowany w " + this.rok_produkcji + " roku.");
    }
}*/
/*
var boeing = new Samolot('Boeing');
boeing.model = "787";
boeing.rok_produkcji = "2015";
boeing.getInfo();


var airbus = new Samolot("Airbus");
airbus.model = "A350";
airbus.rok_produkcji = "2016";
airbus.getInfo();*/

var jsonSamolot = { 
    "samolot": [
    {producent: "Embraer", model: "145", rok_produkcji: "1990"},
    {producent: "Dassualt", model: "Falcon", rok_produkcji: "2016"},
    {producent: "Embraer", model: "Legacy", rok_produkcji: "1990"},
    ]
}

console.log(jsonSamolot);