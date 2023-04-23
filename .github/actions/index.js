const fs = require('fs');


const frase_positiva = "Los tests han funcionado y lo sabes";
const frase_negativa = "Los tests han fallado y lo sabes";
const resultado_tests = true; // Cambia esto para simular diferentes resultados de los tests

let texto = frase_negativa;
if (resultado_tests) {
  texto = frase_positiva;
}

generateMeme({
  imageUrl: 'https://memegen.link/images/buzz/mocking-buzz.png', // Cambia esto para utilizar una imagen diferente
  text: texto
}).then((buffer) => {
  fs.appendFile('README.md', `\n\n![Meme](data:image/png;base64,${buffer.toString('base64')})\n`, function (err) {
    if (err) throw err;
    console.log('Meme añadido al readme');
  });
}).catch((error) => {
  console.log(error);
});





