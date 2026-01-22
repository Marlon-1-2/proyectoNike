//Declarando variables
let nombre;
nombre="Marlon";

let edad=20;

const carrera = "Desarrollo de Software";

//Template o interpolacion de cadenas
console.log(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);

document.writeln(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);

//alert(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);

//calcular el promedio de un alumno y mostrar en pantalla el nombre,
//el promedio y si aprobo o no

let alumno = prompt("Ingresa tu Nombre: ");
let taller = parseFloat(prompt("Ingrese la calificacion del taller: "));
let evaluacion = parseFloat(prompt("Ingrese la calificacion de la evaluacion: "));
let proyecto = parseFloat(prompt("Ingrese la calificacion del proyecto: "));

let nota = (taller+evaluacion+proyecto)/3;

if(nota >=7){
    alert(`El alumno ${alumno} tiene un promedio de ${nota.toFixed(2)}, por lo tanto aprueba`)
}else{
    alert(`El alumno ${alumno} tiene un promedio de ${nota.toFixed(2)}, por lo tanto reprueba`)
}

