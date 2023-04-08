const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('delete_message')
		.setDescription('刪除訊息(待開發)')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
	async execute(interaction) {
        console.log(interaction.user.id)
        if (interaction.user.id === process.env.MyDiscordId) {
            await interaction.reply('早安');
        } else {
            await interaction.reply('You are not owner');
        }
        
	},
};