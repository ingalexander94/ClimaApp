export class Interfaz {

    constructor() {
       this.locacion =  document.getElementById('locacion');
       this.descripcion = document.getElementById('descripcion');
       this.temperatura = document.getElementById('temperatura');
       this.humedad = document.getElementById('humedad');
       this.viento = document.getElementById('viento');
       this.amanece = document.getElementById('amanece');
       this.anochece= document.getElementById('anochece');
    }

    cargar(clima){
     this.locacion.textContent = clima.name+" / "+clima.sys.country;
     this.descripcion.textContent = clima.weather[0].description;
     this.temperatura.textContent = clima.main.temp +" °C";
     this.humedad.textContent = "Humedad: "+clima.main.humidity +" %";
     this.viento.textContent = "Viento: "+clima.wind.speed+" km/h";
     this.amanece.textContent = "Amanece: "+ this.obtenerHora(clima.sys.sunrise);
     this.anochece.textContent = "Anochece: "+this.obtenerHora(clima.sys.sunset);

    }

    obtenerHora(milisegundos){
        var fecha = new Date(milisegundos);
        console.log(fecha.toISOString());
        var hora = fecha.getHours() + " : "+ fecha.getMinutes();
         return hora;
    }

    mostrarError(mensaje){
        const alerta = document.getElementsByClassName("alert");
        if(mensaje===""){
            alerta[0].classList.add('d-none');
            alerta[0].classList.remove('d-block');
        }else{
            alerta[0].classList.add('d-block');
            alerta[0].classList.remove('d-none');
            alerta[0].innerHTML = mensaje;
        }
    }

}