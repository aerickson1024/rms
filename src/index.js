const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.login('MTE3NjMxNTc3Nzk5Mzk0NTA4OQ.GtQ6uB.CQv8duuRv0HLIFdU4pu7BslT4hPV1QPZ_MrSfU')