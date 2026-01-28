import '../css/style.css';
import 'flowbite';

const lista = document.getElementById("lista-carrito");
const totalPagar = document.getElementById("total-compra");

//traer la informacion de la memoria 
let mandosCarrito = JSON.parse(localStorage.getItem("carrito-mandos")) || [];

const actualizarContador = () => {
    const contador = document.getElementById("carrito-contador");
    if (contador) contador.innerText = mandosCarrito.length;
};

const mostrarCarrito = () => {
    lista.innerHTML ="";
    let total = 0;

    mandosCarrito.forEach((mando, index) => {
        total += parseFloat(mando.Precio);
        lista.innerHTML += `
            <div class="flex justify-between items-center border-b border-slate-700 py-4">
                <p class="font-bold">${mando.Modelo}</p>
                <div class="flex items-center gap-4">
                    <span class="text-cyan-400 font-bold">$${mando.Precio}</span>
                    <button data-index="${index}" class="btn-eliminar text-red-500 text-xs">Eliminar</button>
                </div>
            </div>
        `;
    });
    totalPagar.innerText = `$${total.toFixed(2)}`;
    actualizarContador();
};

lista.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-eliminar");
    if (boton) {
        const index = parseInt(boton.dataset.index);
        //eliminar el libro del carrito basandonos en la posicion seleccionar 
        mandosCarrito.splice(index, 1);
        //actualizar los datos
        localStorage.setItem("carrito-mandos", JSON.stringify(mandosCarrito));
        mostrarCarrito();
    }
});

mostrarCarrito();



const btnLimpiar = document.getElementById("btn-limpiar");

btnLimpiar.addEventListener("click", () => {
    // Vaciar el arreglo
    mandosCarrito = [];
    // Actualizar el localStorage
    localStorage.setItem("carrito-mandos", JSON.stringify(mandosCarrito));
    // Refrescar la vista
    mostrarCarrito();
});

