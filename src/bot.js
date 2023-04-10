require('dotenv').config()
const { connect } = require('mongoose');
const {Client,Collection,ActivityType,GatewayIntentBits} = require('discord.js')
const fs =  require('fs')
const { API ,TagTypes} = require('nhentai-api')

const client = 
new Client({intents:
    [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
] })

client.commands = new Collection()
client.buttons = new Collection()
client.selctMenus = new Collection()
client.modals = new Collection()
client.commandArray = []
const nh_api = new API()


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
client.handleComponents()
client.login(process.env.TOKEN);
(async () =>{
    await connect(process.env.DataBaseToken).catch(console.error)
})()
