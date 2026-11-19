const formContacto = document.getElementById("form-contacto");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");
const msgContacto = document.getElementById("msg-contacto");

if(formContacto)
{    
        formContacto.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const nombre = inputNombre.value.trim();
        const email = inputEmail.value.trim();
        const mensaje = inputMensaje.value.trim();
    });
}    

const botonModoOscuro = document.getElementById("boton-modo-oscuro");

botonModoOscuro.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
    }
);
