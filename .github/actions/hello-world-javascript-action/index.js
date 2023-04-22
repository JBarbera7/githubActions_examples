
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TOKEN, {polling: true});


  bot.sendMessage(chatId, 'Hola, soy un bot');
  bot.sendMessage(chatId, 'Workflow ejecutado correctamente tras el ultimo commit. Saludos '. NOMBRE);
 
console.log('Mensaje enviado')