require('dotenv').config()
const {Client,Collection,GatewayIntentBits} = require('discord.js')
const fs =  require('fs')

const client = new Client({intents:GatewayIntentBits.Guilds })
client.commands = new Collection()
client.commandArray = []


const functionFolders = fs.readdirSync(`./src/functions`)
for (const folder of functionFolders) {
    const functionFilse = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"))
    for(const file of functionFilse){
        require(`./functions/${folder}/${file}`)(client)
    }
}

client.handleEvents()
client.handleCommands()
client.login(process.env.TOKEN)