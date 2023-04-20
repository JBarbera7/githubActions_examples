const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

async function enviarMensaje(nombre) {
  const mensaje = `Workflow ejecutado correctamente tras el último commit. Saludos ${nombre}`;
  const respuesta = await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, mensaje);
  console.log(respuesta);
  return "Mensaje enviado";
}

module.exports = enviarMensaje;