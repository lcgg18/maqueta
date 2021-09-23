window.onload = iniciar;
window.onload = limpiar;



function iniciar() {
  var btnGuardar = document.getElementById("btnGuardar");
  btnGuardar.addEventListener("click", clickBtnGuardar);
 
}

function clickBtnGuardar() {
  alert("Se guardaron los correctamente");
}

function limpiar() {
  alert("si nicial limpiar");
  var btnBorrar = document.getElementById("btnBorrar");
  btnBorrar.addEventListener("click", clickLimpiarFormulario);
}

function clickLimpiarFormulario() {
  document.getElementById("inputAct").value="";
  
  alert("Se borro los correctamente");
  
}