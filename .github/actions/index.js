const fs = require('fs');
const { MemeGenerator } = require('meme-generator');

const frase_positiva = "Los tests han funcionado y lo sabes";
const frase_negativa = "Los tests han fallado y lo sabes";
const resultado_tests = true; // Ejemplo, cambiar a false para probar el resultado negativo

const memeTexto = resultado_tests ? frase_positiva : frase_negativa;

// Crear el meme con meme-generator
const memeGenerator = new MemeGenerator();
memeGenerator.generateMeme('./ejemplo.jpg', memeTexto)
  .then((memeBuffer) => {
    // Leer el contenido actual del archivo readme.md
    fs.readFile('./readme.md', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      
      // Agregar el meme al contenido
      const nuevoContenido = data + `\n\n![Meme generado aleatoriamente](${memeBuffer.toString('base64')})`;
      
      // Escribir el contenido modificado en el archivo
      fs.writeFile('./readme.md', nuevoContenido, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        
        console.log('Meme añadido al readme');
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });