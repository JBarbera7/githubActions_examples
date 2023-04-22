const TelegramBot = require('node-telegram-bot-api');

async function run() {
  const bot = new TelegramBot(process.env['INPUT_BOT-TOKEN'], { polling: false });
  const chatId = process.env['INPUT_CHAT-ID'];
  const message = process.env['INPUT_MESSAGE'];

  try {
    await bot.sendMessage(chatId, message);
    console.log('Message sent successfully!');
  } catch (error) {
    console.log('Error sending message:', error);
    process.exit(1);
  }
}

run();