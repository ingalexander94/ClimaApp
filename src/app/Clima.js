export class Clima {

    constructor(ciudad, isoPais){
        this.apiKey = '1a0ee768b17e4a353efbc7a76ded47cc';
        this.ciudad = ciudad;
        this.isoPais = isoPais;
    }

    async obtenerClima(){
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.isoPais}&appid=${this.apiKey}&units=metric&lang=es`;
        const respuesta = await fetch(URL);
        const clima = await respuesta.json();
        return clima;
    }

    
    cambiarCiudad(ciudad,isoPais){
        this.ciudad = ciudad;
        this.isoPais = isoPais;
    }

}