require('./index.css');
const {Clima} = require('./Clima');
const  {Interfaz} = require('./Interfaz');
const {LocalStorage} = require('./LocalStorage');

const localStorage = new LocalStorage();
const {ciudad,isoPais} = localStorage.obtenerDatosLocales();
const clima = new Clima(ciudad,isoPais);
const interfaz = new Interfaz();

async function obtenerClima(){
 const datosClima = await clima.obtenerClima();
 console.log(datosClima);
 if(datosClima.cod === 200){
    interfaz.mostrarError("");
    interfaz.cargar(datosClima);
 }else{
     interfaz.mostrarError("Datos Invalidos");
 }
 
}

document.getElementById("btnMostrar").addEventListener('click',(e)=>{
e.preventDefault();
var ciudad = document.getElementById("ciudad").value;
var isoPais = document.getElementById("pais").value;
if(ciudad ==="" || isoPais ===""){
    interfaz.mostrarError("Complete los datos de la ciudad y el pais");
}else{
    clima.cambiarCiudad(ciudad,isoPais);
    localStorage.guardarDatosLocales(ciudad,isoPais);
    interfaz.mostrarError("");
    obtenerClima();
}
});

document.addEventListener('DOMContentLoaded',obtenerClima);