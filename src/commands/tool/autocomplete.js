const {SlashCommandBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('autocomplete')
		.setDescription('autocomplete')
        .addStringOption(option => 
            option
            .setName('color')
            .setDescription('cssss')
            .setAutocomplete(true)
            .setRequired(true))
	,async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused()
        const choices = [`red`,`blur`,`yello`,`blue`]
        const filtered = choices.filter((choice) =>
        choice.startsWith(focusedValue)
        ) 
        await interaction.respond(
            filtered.map((choice) => ({name:choice,value:choice}))
        )
	},
    async execute(interaction,client){
        const option = interaction.options.getString('color')
        await interaction.reply(
            {content:`u say ${option}`}
        )
    },
};