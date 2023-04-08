const {SlashCommandBuilder,ActionRowBuilder,ButtonBuilder,ButtonStyle} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ex_bt')
		.setDescription('create button'),
	async execute(interaction) {
        const button = new ButtonBuilder()
        .setCustomId(`bt`)
        .setLabel(`點`)
        .setStyle(ButtonStyle.Primary)

        await interaction.reply({
            components:[new ActionRowBuilder().addComponents(button)]
        })
	},
};