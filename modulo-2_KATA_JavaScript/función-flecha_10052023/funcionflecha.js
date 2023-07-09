// CONVERTIR LA FUNCION A UNA FUNCIÓN DE FLECHA

/* function sumaDosNumeros(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
  }; */


const sumaDosNumeros = (primerNumero, segundoNumero) => {
    return primerNumero + segundoNumero;
};

console.log(sumaDosNumeros(5, 78));

const sumaDosNumeros2 = (num1, num2) => num1 + num2;
console.log(sumaDosNumeros2(5, 78));


const saludar2 = personaASaludar => `Hola ${personaASaludar}`;

console.log(saludar2('Eli'));