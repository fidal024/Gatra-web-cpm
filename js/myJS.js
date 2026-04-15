/* ReqJ1 */
const form = document.querySelector('form');

if(form == null){
    console.log('No hay en esta página formulario. Saliendo...');
    exit(0);
}
console.log('Formulario detectado. ¡Todo bien!');


/* ReqJ2 */
function updatePreview(){
    const plataforma = document.querySelector("#plataforma").value;

    const mas18 = document.querySelector("#mas18").checked;
    let opcionmas18 = ""; // let porque const es variable constante, y con let puede variar

    const unJug = document.getElementById('unJug');
    const mulJug = document.getElementById('mulJug');
    const cooJug = document.getElementById('cooJug');
    let modoJugador = "No seleccionado";

    const preview = document.querySelector('#preview');

    if(mas18){
        opcionmas18 = "habilitada";
    }
    else{
        opcionmas18 = "deshabilitada";
    }

    if(unJug.checked){
        modoJugador = "Un jugador";
    }
    else if(mulJug.checked){
        modoJugador = "Multijugador";
    } 
    else if(cooJug.checked){
        modoJugador = "Cooperativo";
    }

    preview.innerHTML = `
    <p><strong>Plataforma: </strong>${plataforma}</p>
    <p>Visualización de juegos +18 ${opcionmas18}</p>
    <p><strong>Número de jugadores: </strong>${modoJugador}</p>
    `;
}


/* ReqJ3 */
function checkValidityState(field){
    field.classList.remove('valid', 'invalid');

    if(field.checkValidity()){
        field.classList.add('valid');
    }
    else{
        field.classList.add('invalid');
    }
}


/* ReqJ4 */
function validateForm(){
    const errorBox = document.getElementById('error-box');
    errorBox.textContent = "";
    errorBox.classList.remove('visible');

    if(!form.reportValidity()){
        return false;
    }
    
    const customError = checkCustomRules();
    if(customError){
        errorBox.classList.add('visible');
        errorBox.textContent = customError;
        return false;
    }
    
    return true;
}


/* ReqJ5 */
function checkCustomRules(){
    const nombre = document.querySelector('#nombre');
    nombre.classList.remove('valid', 'invalid');
    const password = document.querySelector('#password');
    password.classList.remove('valid', 'invalid');

    // Longitud mínima para el nombre
    if(nombre.value.length < 3){
        nombre.classList.add('invalid');
        /* ReqJ6 */
        nombre.focus();
        return "Nombre demasiado corto, mínimo tres caracteres."
    }

    // Nombre igual que la contraseña
    if(nombre.value == password.value){
        password.classList.add('invalid');
        /* ReqJ6 */
        password.focus();
        return "Contraseña insegura: no puede ser igual al nombre";
    }

    nombre.classList.add('valid');
    password.classList.add('valid');
    return null;
}


/* ReqJ7 */
function handleKey(event){
    const message = document.getElementById("message");

    // Detecta el botón bloq mayus
    if(event.getModifierState("CapsLock")){
        message.textContent = "Mayúsculas activadas";
        message.className = "mayusActiva";
    }
    else{
        message.textContent = "";
    }
}


/* ReqJ8 */
function handleMouseOver(element){
    element.classList.add('highlight');
}

function handleMouseOut(element){
    element.classList.remove('highlight');
}