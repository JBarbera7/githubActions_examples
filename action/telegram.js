const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const name = process.env.name;

console.log('token' +  token);
console.log('id' + chatId);



const bot = new TelegramBot(token);


  const message = `Workflow ejecutado correctamente tras el último commit. Saludos ` + name;
    bot.sendMessage(chatId, message);
  console.log('Mensaje enviado');





