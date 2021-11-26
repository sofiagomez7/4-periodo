
//lista de pendientes-ToDo List 
const pendientes = JSON.parse(localStorage.getItem('pendientes')) || [];
const cumplidas = JSON.parse(localStorage.getItem('cumplidas')) || [];
const render = () => {
    const listado = document.getElementById("lista-pendientes");
    const listadoC = document.getElementById("lista-cumplidas");
    const plantilla = pendientes.map(p => "<li>"+ p +"</li>" );
    const plantillaC = cumplidas.map(p => "<li>"+ p +"</li>" );
    listado.innerHTML = plantilla.join("");
    listadoC.innerHTML = plantillaC.join("");
    const elementos = document.querySelectorAll('#lista-pendientes li');
     elementos.forEach((elemento, i) =>{
        elemento.addEventListener('click',()=>{ 
             elemento.parentNode.removeChild(elemento) ;
            const cumplida =pendientes.splice(i,1)
            cumplidas.push(cumplida);
            console.log(cumplidas);
            actualizarpendientes(pendientes);
            render();
            })
        })

}

const actualizarpendientes = () => {
    const pendientescadena = JSON.stringify(pendientes);
    localStorage.setItem('pendientes',pendientescadena);
}

window.onload = () => {
    render();
    const formulario =document.getElementById("formulario-pendientes");
    formulario.onsubmit =(e) => {
        e.preventDefault();
        const pendiente = document.getElementById("pendiente");
        const contenidopendiente = pendiente.value;
        pendiente.value = "";
        pendientes.push(contenidopendiente);
        actualizarpendientes(pendientes);
        render();
    }
}