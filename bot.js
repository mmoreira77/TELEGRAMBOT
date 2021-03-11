// const { Telegraf } = require('telegraf');
const Telegram = require('telegraf/telegram');

const bot = new Telegram('1546635027:AAFGz4czSrjIcx1uo3ol-sw3R1Mk5eIYl7k');

bot.sendMessage('-1001177143725', `Envío de mensaje desde el backend`);

// bot.on('text', (ctx) => {
//     // Explicit usage
//     ctx.telegram.sendMessage('-1001177143725', `Pruebas de envio push`)
// })


// bot.launch();