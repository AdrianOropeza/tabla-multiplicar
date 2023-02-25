const fs = require("fs");

const crearTabla = async ( base = 1, listar = false) => {
    try {
        let texto = `**TABLA DE MULTIPLICAR DEL ${base}**`.bgMagenta + "\n";

        for (let i = 1; i <= 10; i++){
            texto += `${base} ${'x'.blue} ${i} ${'='.blue} ${base * i}` + "\n";
        }
        if ( listar == true ) {
            console.log(texto.bgRed.white);
        } 
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, texto)
    
        return ('Archivo creado');
    } catch (err) {
            throw err;
    }
}

module.exports = {
    crearTabla
}