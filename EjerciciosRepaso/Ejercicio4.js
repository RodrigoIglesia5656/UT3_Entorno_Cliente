let C = 5;
let F = 10;

function pasarCelsius(F){
return (F - 32) * 5 / 9;
}

function pasarFahrenheit(C){
return (C * 9 / 5) + 32;
}

console.log(C + " grados Celsius son " + pasarFahrenheit(C) 
+ " grados Fahrenheit");

console.log(F + " grados Fahrenheit son " + pasarCelsius(F)
+ " grados Celsius");