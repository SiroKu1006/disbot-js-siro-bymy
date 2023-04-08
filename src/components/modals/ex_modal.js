const {SlashCommandBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('nh')
		.setDescription('Only use NSFW channel')
        .addStringOption(option =>
            option.setName('gd_number')
                .setDescription('number')
                .setRequired(true))
        .addNumberOption(option =>
            option.setName('gd_number')
                .setDescription('number')
                .setRequired(true))

        ,
	async execute(interaction,client) {
        if (interaction.channel.nsfw || interaction.channel.id === '924976048209293332') {
            await interaction.reply({
                content:`https://nhentai.net/g/${interaction.options.get('gd_number').value}/1`
            })
        } 
        else {
            await interaction.reply({
                content:`is not NSFW channel`,
                ephemeral: true
            })
        }
	},
};