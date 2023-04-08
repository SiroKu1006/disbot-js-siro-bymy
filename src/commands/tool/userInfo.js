const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('user_info')
		.setDescription('使用者訊息'),
	async execute(interaction,client) {
        const embed = new EmbedBuilder()
        .setTitle(`User info`)
        .setAuthor({ name: `${interaction.user.username}#${interaction.user.discriminator}`, iconURL: `${interaction.user.displayAvatarURL()}`})
        .setColor(0x727cfb)
        .setDescription(`<@${interaction.user.id}>`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .addFields([
            {
            name:`ID`,
            value:`${interaction.user.id}`,
            inline: false
        },{
            name:`帳號建立日期`,
            value:`d`,
            inline: true
        },{
            name:`加入伺服器日期`,
            value:`d`,
            inline: true
        }
        ])
        await interaction.reply({embeds:[embed]})
	},
};