const {SlashCommandBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Return delay'),
	async execute(interaction) {
		const message = await interaction.reply({content:`連結中`,fetchReply:true})
		try {
			const d = message.createdTimestamp-interaction.createdTimestamp
			await interaction.editReply({content:`${d} ms`})
		} catch (error) {
			console.log(`ping.js is broken\n${error}`)
		}
		// await interaction.reply('Pong!');
	},
};