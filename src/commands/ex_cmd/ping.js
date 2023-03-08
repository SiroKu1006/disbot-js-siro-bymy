const {SlashCommandBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
// module.exports = {
//     data: new SlashCommandBuilder()
//     .setName('Ping')
//     .setDescription('return ping'),
//     async excute(interaction,client){
//         const message = await interaction.Reply({
//             content:`連接中`,
//             fetchReply:true
//         })
//         try{
//         const newMessage = `Client Ping ${message.createdTimestamp - interaction.createdTimestamp} ms`
//         await interaction.editReply({
//             content:newMessage
//         })
//         }catch(error){
//             console.log(`Ping.js is broken\n\n${error}`)
//         }
//     }
    
// }