const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function generateMeme(positivePhrase, negativePhrase, testResult) {
  const canvas = createCanvas(500, 500);
  const ctx = canvas.getContext('2d');

  // Cargar la imagen del meme
  const memeImage = await loadImage('meme.jpg');
  ctx.drawImage(memeImage, 0, 0, canvas.width, canvas.height);

  // Agregar texto al meme
  const text = testResult ? positivePhrase : negativePhrase;
  ctx.font = '30px Impact';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Guardar el meme como archivo JPEG
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync('meme.jpg', buffer);

  // Leer el archivo README.md
  const readme = fs.readFileSync('README.md', 'utf8');

  // Agregar el meme al archivo README.md
  const newReadme = readme + `\n\n![Meme](./meme.jpg)`;

  // Escribir el archivo README.md modificado
  fs.writeFileSync('README.md', newReadme);

  console.log('Meme añadido al readme2');
}

module.exports = generateMeme;