const { Client, IntentsBitField } = require('discord.js')
const env = require('dotenv').config()

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

client.on('ready', (resp) => {
  console.log(`✅ ${resp.user.username} BOT is online!`)
})

client.on('messageCreate', (message) => {
  if (message.author.bot) return

  if (message.content === 'hello') {
    message.reply('hello')
  }
})

client.login(process.env.TOKEN)