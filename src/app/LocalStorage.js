export class LocalStorage{

    constructor(){
        this.ciudad;
        this.isoPais;
        this.ciudadDefecto = "Cúcuta";
        this.isoPaisDefecto = "CO";
    }

    obtenerDatosLocales(){
        if(localStorage.getItem('ciudad') === null){
            this.ciudad = this.ciudadDefecto;
            this.isoPais = this.isoPaisDefecto;
        }else{
            this.ciudad = localStorage.getItem('ciudad');
            this.isoPais = localStorage.getItem('isoPais');
        }

        return{
            ciudad: this.ciudad,
            isoPais:this.isoPais
        }
    }

    guardarDatosLocales(ciudad,isoPais){
        localStorage.setItem('ciudad',ciudad);
        localStorage.setItem('isoPais',isoPais);
    }

}