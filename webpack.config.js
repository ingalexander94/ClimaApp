const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js', // punto de entrada que webpack debe usar para crear el grafico de dependencias
    output: {                                        //    \
       path: path.join(__dirname,'distribucion'),    //      le dice a webpack la carpeta donde se guardan los  
       filename: 'bundle.js'                         //     paquetes que crea en el archivo bundle.js
    },                                               //    /
    devServer:{
        port : 3000  // activa el servidor en el puerto 3000 para ver la aplicación
    },
    module:{                  // webpack solo entiende por si solo archivos JSON y JavaScript cualquier
        rules : [             // otro tipo de archivo debe ser convertido
            {
                test: /\.css$/,// le dice a webpack que todos los archivos CSS los convierta a javascript o JSON
                use:['style-loader','css-loader'] // le dice a webpack que debe cargadores debe usar para                                            realizar la conversión de los archivos CSS
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html' //genera un archivo HTML  para inyectar                                                               automáticamente todos los paquetes generados.
        })  
    ]
}