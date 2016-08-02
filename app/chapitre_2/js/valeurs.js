var a = 2; // a vaut 2
a = a - 1; // a vaut 1
a++; // a vaut 2
var b = 8; // b vaut 8
b += 2; // b vaut 10
var c = a + b * b; // c vaut 102
var d = a * b + b; // d vaut 30
var e = a * (b + b); // e vaut 40
var f = a * b / a; // f vaut 10
var g = b / a * a; // g vaut 10

console.log("a :: " + a + "\n" +// a vaut 2
            "b :: " + b + "\n" + // b vaut 10
            "c :: " + c + "\n" + // c vaut 102
            "d :: " + d + "\n" + // d vaut 30
            "e :: " + e + "\n" + // e vaut 40
            "f :: " + f + "\n" + // f vaut 10
            "g :: " + g); // g vaut 10
