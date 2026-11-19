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

            if (nombre === "" || email === "" || mensaje === "") {
                msgContacto.textContent = "Por favor, complete todos los campos obligatorios.";
                msgContacto.style.color = "#B71C1C";
                return;
            }
            if (!email.includes("@gmail.com") && !email.includes("@hotmail.com") && !email.includes("@yahoo.com")) {
                msgContacto.textContent = "Por favor, ingrese un correo válido de @gmail.com, @hotmail o @yahoo.com";
                msgContacto.style.color = "#B71C1C";
                return;
            }

            msgContacto.textContent = `¡Gracias por su consulta, ${nombre}! Nos pondremos en contacto pronto.`;
            msgContacto.style.color = "#1A6B2A";

            formContacto.reset();
        });
}    

const botonModoOscuro = document.getElementById("boton-modo-oscuro");

botonModoOscuro.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
    }
);
