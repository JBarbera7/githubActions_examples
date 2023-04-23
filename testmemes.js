const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function generateMeme(frase, canvasWidth, canvasHeight) {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Load image
  const image = await loadImage('meme.jpg');
  ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

  // Set text properties
  ctx.font = 'bold 40pt Impact';
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Draw text
  const words = frase.split(' ');
  let line = '';
  let y = canvasHeight / 2;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > canvasWidth && n > 0) {
      ctx.strokeText(line, canvasWidth / 2, y);
      ctx.fillText(line, canvasWidth / 2, y);
      line = words[n] + ' ';
      y += 60;
    } else {
      line = testLine;
    }
  }
  ctx.strokeText(line, canvasWidth / 2, y);
  ctx.fillText(line, canvasWidth / 2, y);

  return canvas.toBuffer();
}

async function run() {
  try {
    // Get inputs
    const frasePositiva = process.env.FRASE_POSITIVA;
    const fraseNegativa = process.env.FRASE_NEGATIVA;
    const resultadoTests = process.env.RESULTADO_TESTS;

    // Generate meme with positive or negative phrase based on test results
    const frase = resultadoTests === 'success' ? frasePositiva : fraseNegativa;
    const memeBuffer = await generateMeme(frase, 600, 400);

    // Read and modify README.md file
    let readme = fs.readFileSync('README.md', 'utf8');
    readme += `\n\n![Meme](data:image/jpeg;base64,${memeBuffer.toString('base64')})\n\n`;

    // Write modified README.md file
    fs.writeFileSync('README.md', readme);

    console.log('Meme añadido al readme');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();