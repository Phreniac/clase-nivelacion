
function clickUsuario (){
    let ventana_usuario = document.getElementById('ventana_usuario');
    let ventana_clases = ventana_usuario.className;
    let ventana_abierta = ventana_clases.includes('mostrar-ventana');
    //si la ventana esta abierta se cierra, quitando la clase mostrar-ventana
    if(ventana_abierta){
        ventana_usuario.classList.remove('mostrar-ventana');
    }else{
        ventana_usuario.classList.add('mostrar-ventana')
    }
}
function cerrarVentana (){
    let ventana_usuario = document.getElementById('ventana_usuario');
    let ventana_clases = ventana_usuario.className;
    let ventana_abierta = ventana_clases.includes('mostrar-ventana');
    if(ventana_abierta){
        ventana_usuario.classList.remove('mostrar-ventana');
    }
}
window.addEventListener("click",function(event){
    console.log('evento: ', event.target.id);
    if(event.target.id !== 'ventana_usuario' 
        && event.target.id !== 'btn_usuario' 
        && event.target.id !== 'close_icon'){
            cerrarVentana();   
    }
});
validarInicioSesion();

