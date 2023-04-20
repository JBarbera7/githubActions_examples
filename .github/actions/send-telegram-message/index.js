const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token);

bot.sendMessage(chatId, `Workflow ejecutado correctamente tras el último commit. Saludos ${process.env.NAME}`)
  .then(() => {
    console.log('Mensaje enviado');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });