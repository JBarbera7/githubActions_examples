const fs = require('fs');
const memeGenerator = require('meme-generator');

function addMemeToReadme(frase_positiva, frase_negativa, resultado_tests) {
  // Generar el texto del meme aleatoriamente dependiendo del resultado de los tests
  const texto_meme = resultado_tests ? frase_positiva : frase_negativa;
  
  // Generar el meme con la librería meme-generator
  const meme = memeGenerator({
    filePath: 'https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/06/44963627-64F7-457B-9E18-189D99D449C4/69.jpg?crop=4:3,smart&width=1200&height=900&optimize=low&format=webply',
    topText: 'Texto superior del meme',
    bottomText: texto_meme,
  });

  // Leer el contenido del archivo readme.md
  const readme = fs.readFileSync('./readme.md', 'utf8');

  // Añadir el texto del meme al final del archivo readme.md
  const nuevo_contenido = readme + '\n' + meme;

  // Escribir el nuevo contenido en el archivo readme.md
  fs.writeFileSync('./readme.md', nuevo_contenido);

  // Devolver el mensaje indicando que el meme ha sido añadido al readme.md
  return "Meme añadido al readme";
}