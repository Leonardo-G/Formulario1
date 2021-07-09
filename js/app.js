const form = document.querySelector("#form");
const nameInput = form["name"];
const lastname = form["lastname"];
const mail = form["mail"];
const buttonPress = form["button"];


eventListener()
function eventListener(){
    // Inhabilitar el boton de enviar
    document.addEventListener("DOMContentLoaded", startApp);

    //Inputs
    nameInput.addEventListener("blur", validateForm);
    lastname.addEventListener("blur", validateForm);
    mail.addEventListener("blur", validateForm)

    //Enviar Formulario
    form.addEventListener("submit", enviarFormulario)

}

function startApp(){
    buttonPress.disabled = true
    buttonPress.style.cursor = "no-drop";
}

function validateForm(e){
    if( e.target.value.length > 2 ){
        e.target.style.border = "2px solid green";
        const error = document.querySelector(".error")
        if(error){
            error.remove()
        }

    }else{
        e.target.style.border = "2px solid red"
        showError("Llene todos los campos")
    }

    const mailType = e.target.type === "email" ;
    const arroba = e.target.value.indexOf("@");
    const punto = e.target.value.indexOf(".");
    if(mailType){
        if(arroba > 0 && punto > 0){
            e.target.style.border = "2px solid green"
            console.log(arroba);
            
        }else{
            e.target.style.border = "2px solid red";
            showError("Ingrese un email valido")
            console.log("error")
        }
    }

    if(nameInput.value.length > 2 && lastname.value.length > 2 && arroba > 0 && punto > 0){
        buttonPress.disabled = false;
        buttonPress.style.cursor = "pointer"
    }
}

//MostrarError
function showError(message){
    const error = document.createElement("DIV");
    error.classList.add("error");
    error.innerHTML = `<p> ${message} </p>`;

    //Borrar los ERRORES repetidos. Primero seleccionamos todos los error con el QUERYSELECTOR ALL
    const errores = document.querySelectorAll(".error")

    if(errores.length === 0){
        form.appendChild(error);
    }
    console.log(error)
}

//Enviar Formulario
function enviarFormulario(e){
    e.preventDefault();

    const spinner = document.querySelector(".sk-folding-cube");
    spinner.style.display = "block";
    form.insertBefore(spinner, buttonPress);

    setTimeout(() => {
        e.target.submit()
    }, 2000);

}


