import '../css/style.css'; 
import 'flowbite';  

//seleccionamos las etiquetas con id
const btonGuardar = document.getElementById("btn-guardar");
const divDatos = document.getElementById("imprimir-datos");
const btnLimpiar = document.getElementById("btn-limpiar");

const calcularPromedio = () =>{
    let nombre = document.getElementById("nombre").value;
    let taller = parseFloat(document.getElementById("taller").value);
    let evaluacion =parseFloat (document.getElementById("evaluacion").value);
    let proyecto = parseFloat(document.getElementById("proyecto").value);

    let promedio = (taller+evaluacion+proyecto)/3;

    divDatos.textContent = `El alumno ${nombre} tiene un promedio de ${promedio.toFixed(2)}`;

}

const limpiarCampos = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("taller").value = "";
    document.getElementById("evaluacion").value = "";
    document.getElementById("proyecto").value = "";

    divDatos.textContent = "";
}

btonGuardar.addEventListener("click", calcularPromedio);

btnLimpiar.addEventListener("click", limpiarCampos);

