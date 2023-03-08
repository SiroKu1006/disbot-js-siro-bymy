const {REST} = require(`@discordjs/rest`)
const { Routes } = require(`discord-api-types/v10`)
const fs = require('fs')
require('dotenv').config()
const {token} = process.env.token

module.exports = (client) =>{
    client.handleCommands = async() =>{
        const commandFolders = fs.readdirSync("./src/commands")
        for(const folder of commandFolders){
            const commandFiles = fs
            .readdirSync(`./src/commands/${folder}`)
            .filter((file) => file.endsWith('.js'))

            const {commands,commandArray} = client
            for(const file of commandFiles){
                const command = require(`../../commands/${folder}/${file}`)
                commands.set(command.data.name, command)
                commandArray.push(command.data.toJSON())
                console.log(`${command.data.name} 已上傳`)
            }
        }
        const rest = new REST({ version: '10' });
        rest.setToken(process.env.token);
        try {
            console.log(`Start (/) commands.`)
            await rest.put(
                Routes.applicationCommands(process.env.clientId),
                { body: client.commandArray },
            );
        } catch (error) {
            console.error(error)
        }
    }
}