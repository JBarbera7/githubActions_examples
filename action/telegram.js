const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token);


  const message = `Workflo ejecutado correctamente tras el último commit. Saludos Javier `;
    bot.sendMessage(chatId, message);
  console.log('Mensaje enviado');





