function valida () {
    let usuario = document.getElementById ("usuario").value;   
    if(/^\s+S/.test(usuario)||usuario.length==0){
        console.log("variable vacia");
    }
    else {
        console.log("variable llena")
    }
    };
window.onload = () =>{
    const registro = document.getElementById("registro-form");
    registro.onsubmit = (e) => {
        e.preventDefault();
        valida();
    }
}