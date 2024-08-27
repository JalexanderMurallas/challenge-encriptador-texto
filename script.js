let d = document;

/* Selección elementos HTML */

const btnEncriptar = d.querySelector('.btn-encriptar'); // Botón para encriptar
const btnDesencriptar = d.querySelector('.btn-desencriptar'); // Botón para desencriptar
const txtEncriptar = d.querySelector('.texto-encriptar'); //Área de texto para encriptar
const textoAviso = d.querySelector('.alerta-texto'); // Texto alerta
const respuesta = d.querySelector('.result'); // Área de respuesta
const contenidoTarjetaContainer = d.querySelector('.tarjeta-container'); // Contenedor de la tarjeta
const btnCopy = d.querySelector('.btn-copiar'); // Botón para copiar


// Delegación del evento 'click' al botón de 'Encriptar'
btnEncriptar.addEventListener('click', e => {
    e.preventDefault();
    const valorTexto = txtEncriptar.value;

    // Normalizar y limpiar el texto de caracteres especiales
    const txt = valorTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(txt);

    // Validaciones del texto ingresado
    if (valorTexto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
    } else if (valorTexto !== txt) {
        mostrarAviso("El texto no debe tener acentos ni caracteres especiales...");
    } else if (valorTexto !== valorTexto.toLowerCase()) {
        mostrarAviso("¡Solo se acepta texto en minúsculas!");
    } else {
        // Encriptar el texto
        let textoEncriptado = valorTexto
            .replace(/e/mg, 'enter')
            .replace(/i/mg, 'imes')
            .replace(/a/mg, 'ai')
            .replace(/o/mg, 'ober')
            .replace(/u/mg, 'ufat');

        // Mostrar el texto encriptado y ajustar la interfaz
        respuesta.innerHTML = textoEncriptado;
        btnCopy.style.visibility = 'inherit';
        contenidoTarjetaContainer.remove();
    }
});

// Función para mostrar avisos
function mostrarAviso(mensaje) {
    textoAviso.style.background = "#0A3871";
    textoAviso.style.color = "#FFFF";
    textoAviso.style.fontWeight = "800";
    textoAviso.textContent = mensaje;

    setTimeout(() => {
        textoAviso.removeAttribute('style');
    }, 1500);
}



// Evento para el botón de desencriptar
btnDesencriptar.addEventListener('click', e => {
    e.preventDefault();
    const valorTexto = txtEncriptar.value;
    
    // Normalizar y limpiar el texto de caracteres especiales
    const txt = valorTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(txt);

    // Validaciones del texto ingresado
    if (valorTexto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
    } else if (valorTexto !== txt) {
        mostrarAviso("El texto no debe tener acentos ni caracteres especiales...");
    } else if (valorTexto !== valorTexto.toLowerCase()) {
        mostrarAviso("¡Solo se acepta texto en minúsculas!");
    } else {
        // Desencriptar el texto
        let textoDesencriptado = valorTexto
            .replace(/enter/mg, 'e')
            .replace(/imes/mg, 'i')
            .replace(/ai/mg, 'a')
            .replace(/ober/mg, 'o')
            .replace(/ufat/mg, 'u');

        // Mostrar el texto desencriptado y ajustar la interfaz
        respuesta.innerHTML = textoDesencriptado;
        btnCopy.style.visibility = 'inherit';
        contenidoTarjetaContainer.remove();
    }
});

// Función para mostrar avisos
function mostrarAviso(mensaje) {
    textoAviso.style.background = "#0A3871";
    textoAviso.style.color = "#FFFF";
    textoAviso.style.fontWeight = "800";
    textoAviso.textContent = mensaje;

    setTimeout(() => {
        textoAviso.removeAttribute('style');
    }, 1500);
}

// Función copiar

btnCopy.addEventListener('click', e => {
    e.preventDefault();

    const copiarTexto = respuesta.textContent;

    // Usar la API portapapeles
    navigator.clipboard.writeText(copiarTexto).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});