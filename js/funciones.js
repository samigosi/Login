

function validarLogin() {
	//Valido el correo 
 var CorreoLog= document.getElementById('correo').value;	
 var contrasenaLog= document.getElementById('passwordLog').value;	
 
  
  if (CorreoLog == "" ) { document.getElementById('CorrLogVal').innerHTML  = "La dirección de email esta vacia.";} 
   else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(CorreoLog)) {
    } else {
 document.getElementById('CorrLogVal').innerHTML   = "La dirección de email no es un formato valido."; } 
  
   if (contrasenaLog == "" ) { document.getElementById('passlog').innerHTML   = "El campo contraseña esta vacio.";} 
   else if(contrasenaLog.length!=6) {
	   document.getElementById('passlog').innerHTML   = "Ingresar minimo 6 caracteres.";} 

 
}


function validarRegistro() {
	
 var NombreReg = document.getElementById('nombre').value;	 
 var TelReg = document.getElementById('telefono').value;		
 var CorreoReg= document.getElementById('correoRe').value;	
 var contrasena1= document.getElementById('password1').value;	
 var contrasena2= document.getElementById('cpassword2').value;	
 

 if (NombreReg == "") {	 
	 document.getElementById('nombreVal').innerHTML   = "El nombre esta vacio.";
	 } 
 
  if (TelReg == "") {	 
	 document.getElementById('telefonoVal').innerHTML   = "El telefono esta vacio.";
	 } 
 
  if (CorreoReg == "" ) { document.getElementById('valCorreo').innerHTML  = "La dirección de email esta vacia.";} 
   else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(CorreoReg)) {
    } else {
 document.getElementById('valCorreo').innerHTML   = "La dirección de email es incorrecta!."; } 
   
	 
	
  if (contrasena1 == "" ) { document.getElementById('password1Val').innerHTML   = "El campo contraseña esta vacio.";} 
   else if(contrasena1.length!=6) {
	   document.getElementById('password1Val').innerHTML   = "Ingresar minimo 6 caracteres.";} 

  if (contrasena2 == "" ) { document.getElementById('cpassword2Val').innerHTML   = "El campo contraseña esta vacio.";} 
   else  if (contrasena1.length!=6) {
	   document.getElementById('cpassword2Val').innerHTML   = "Ingresar minimo 6 caracteres.";} 

	 
 
  if (contrasena1==contrasena2){
     } else {
		 document.getElementById('cpassword2Val').innerHTML   = "Las contraseñas no son iguales";} 
  }
  



//Valida los campos que solo permiten Letras
function validaLetras(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
// Patron de entrada, en este caso solo acepta Letras
    patron =/[a-zA-Z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

//Valida los campos que solo permiten Numeros
function validaNumeros(e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
// Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

