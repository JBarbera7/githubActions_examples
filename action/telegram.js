const TelegramBot = require('node-telegram-bot-api');



const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });


  const message = `Workflow ejecutado correctamente tras el último commit. Saludos Javier `;
    bot.sendMessage(TELEGRAM_CHAT_ID, message);
  console.log('Mensaje enviado');





