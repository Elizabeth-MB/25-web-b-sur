// 

// 1. Datos de entrada
let name, lastname, anhoNacimiento, currentYear, age;

// =, este simbolo, significa "Asignación", es decir, asignar el valor de la derecha a la izquierda

// 2. ¿Qué tengo que hacer con los datos?
name = prompt('Escribe tu nombre :D');
lastname = prompt('Ahora tu apellido');
anhoNacimiento = Number(prompt('¿En que año naciste?'));
currentYear = Number(prompt('¿En que año estamos?'));

age = currentYear - anhoNacimiento;

// 3. Cómo y que debo mostrar al usuario

alert(`${name} ${lastname}, tu edad actual es: ${age}`);