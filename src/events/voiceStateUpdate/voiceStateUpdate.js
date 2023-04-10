const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    name: 'voiceStateUpdate',
    async execute(oldState,newState){
        const user = oldState.member
        if (!oldState.channel) {//in
            console.log(`${user} in ${newState.channel}`)
        } else if(!newState.channel){//out
            console.log(`${user} out ${oldState.channel}`)
        }else{//move
            console.log(`${user} from ${oldState.channel} move to ${newState.channel}`)
        }
        console.log(`${newState.guild.id}`)
    }
}