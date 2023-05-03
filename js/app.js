import { valida } from "./validaciones.js";
import { validaText } from "./validaciones.js";

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });

const textareas = document.querySelectorAll('textarea');

textareas.forEach((textarea) => {
    textarea.addEventListener('blur', (textarea) => {
        validaText(textarea.target);
    })
});

});