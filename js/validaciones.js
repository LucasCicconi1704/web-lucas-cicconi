export function valida(input) {
    const tipoDeInput = input.dataset.tipo;


    console.log(`Apunto al elemento PADRE ${input.parentElement}`); 
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }

}

export function validaText(textarea) {
    /* const tipoDeText = document.getElementById("myMessage");
 */

    console.log(`Apunto al elemento PADRE ${textarea.parentElement}`); 
    if (textarea.validity.valid) {
        textarea.parentElement.classList.remove('textarea-container--invalid');
        textarea.parentElement.querySelector('.textarea-mensagem-error').innerHTML = '';
    } else {
        textarea.parentElement.classList.add('textarea-container--invalid');
        textarea.parentElement.querySelector('.textarea-mensagem-error').innerHTML = "El campo mensaje no puede estar vacio";
    }

}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
];

const mensajesDeError = {
    nombre: {
        valueMissing: 'El campo nombre no puede estar vacio'
    },
    email: {
        valueMissing: 'El campo email no puede estar vacio',
        typeMismatch: 'El correo no es valido'
    },
    asunto: {
        valueMissing: 'El campo asunto no puede estar vacio',
        patternMismatch: 'Hasta 50 caracteres'
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }   
    });
    return mensaje;
}