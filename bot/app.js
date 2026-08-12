import {Telegraf, Markup} from 'telegraf'

const token = '8605973919:AAEHUNprBOzGLy3yh6DBbmBRzCRdCEwYPsg'
const webAppUrl = 'https://lizzard-clicker-2026.web.app'

const bot = new Telegraf(token)
bot.command('start', (ctx) => {
    ctx.reply('Hello! Press to start the app!', Markup.inlineKeyboard([
        Markup.button.webApp(
            'Open mini app',
            `${webAppUrl}?ref=${ctx.payload}`,
        )
    ]))
})
bot.launch()