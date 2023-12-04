
const { Telegraf } = require("telegraf");
const TOKEN = "6939094464:AAEyKiNrOL27WKdmJYEm-m2_GCDs38uIbZc";
const bot = new Telegraf(TOKEN);

const web_link = "https://crypto-bot-two.vercel.app/"

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.command('setmenubutton', (ctx) => {
    ctx.getChatMenuButton()
    ctx.setChatMenuButton({type: 'web_app', text: 'web app', url: web_link})
    ctx.reply('Button added')
    
});
bot.launch();
