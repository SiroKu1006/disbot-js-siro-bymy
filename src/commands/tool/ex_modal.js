const {SlashCommandBuilder,ModalBuilder,ActionRowBuilder,TextInputBuilder,TextInputStyle} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('modal')
		.setDescription('ex modal'),
	async execute(interaction) {
		const modal = new ModalBuilder()
        .setCustomId(`ex_modal`)
        .setTitle('Say')
        
        const textInput = new TextInputBuilder()
        .setCustomId(`ex_input`)
        .setLabel(`wtt`)
        .setRequired(true)
        .setStyle(TextInputStyle.Short)

        modal.addComponents(new ActionRowBuilder().addComponents(textInput))
        await interaction.showModal(modal)
	},
};