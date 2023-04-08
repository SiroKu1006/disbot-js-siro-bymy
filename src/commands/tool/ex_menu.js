const {SlashCommandBuilder,ActionRowBuilder,StringSelectMenuBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ex_menu')
		.setDescription('create menu'),
	async execute(interaction) {
        const menu = new StringSelectMenuBuilder()
                .setCustomId(`ex_menu`)
                .setMaxValues(1)
                .setMinValues(1)
                .setPlaceholder('Nothing selected')
                .addOptions([
                    {
                        label:'Op 1',
                        description:'description',
                        value:`1`,
                    },
                    {
                        label:'Op 2',
                        description:'description',
                        value:`2`,
                    }
                ])

        await interaction.reply({
            components:[new ActionRowBuilder().addComponents(menu)]
        })
        
	},
};