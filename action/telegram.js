const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token);

async function sendMessage(name) {
  const message = `Workflow ejecutado correctamente tras el último commit. Saludos ${name}`;
  await bot.sendMessage(chatId, message);
  console.log('Mensaje enviado');
}

module.exports = { sendMessage };