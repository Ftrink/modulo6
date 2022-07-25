const fs = require('fs');

function escribir() {
    // fs.writeFile(nombre_archivo, contenido, codificacion, callback)
    const productos = 'tallarines, atun, aceite, mani, salsa de tomate'

    fs.writeFile('shopping.txt', productos, 'utf8', function () {
        console.log('Archivos escritos correctamente');
        //<================>
        function leer() {
            fs.readFile('./shopping.txt', 'utf8', function (err, productos) {
                console.log(productos);               
                //<=================>
                function renombrar() {
                    fs.rename('shopping.txt', 'compras.txt', function () {
                        console.log('Archivo renombrado');
                        //<============>
                        function eliminar() {
                            fs.unlink('compras.txt', function () {
                                console.log('Archivo eliminado');
                            })
                        }
                        setTimeout(() => {
                            eliminar();
                        }, 2000); 
                    })
                }
                setTimeout(() => {
                    renombrar();
                }, 2000);
            })
            console.log('leer');
        }
        setTimeout(() => {
            leer();
        }, 2000); 
        })

    console.log('enpezando ejecución');
}
escribir();