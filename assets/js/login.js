function inicioSesion(){
    const contrasenia = '123';
    const usuario = 'user123';
    let nombre_usuario = document.getElementById('nombre_usuario').value;
    let contrasenia_usuario = document.getElementById('contrasenia_usuario').value;
    if(contrasenia == contrasenia_usuario && usuario == nombre_usuario){
        localStorage.setItem('nombre_usuario', nombre_usuario);
        localStorage.setItem('contrasenia_usuario', contrasenia_usuario);
        window.location.href = 'index.html';
    }
}
function cerrarSesion(){
    let usuario = localStorage.getItem('nombre_usuario');
    let contrasenia = localStorage.getItem('contrasenia_usuario');
    if(usuario != null && contrasenia != null){
        //localStorage.clear();
       location.href = 'login.html';
        //window.location.href = 'login.html';
    }
}
function validarInicioSesion(){
    let usuario = localStorage.getItem('nombre_usuario');
    let contrasenia = localStorage.getItem('contrasenia_usuario');
    console.log('usuario desde home', usuario);
    console.log('contraseña desde home', contrasenia);
    if(usuario == null && contrasenia == null){
        window.location.href = 'login.html';
    }
}