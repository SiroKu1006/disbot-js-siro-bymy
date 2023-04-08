const {SlashCommandBuilder} = require('discord.js')


module.exports = {
	data: new SlashCommandBuilder()
		.setName('dns')
		.setDescription('Clean DNS'),
	async execute(interaction) {
		await interaction.reply('打開你的Windows，開起搜尋框，打下cmd（或從附屬應用程式中找到命令提示字元）。 當命令提示字元的黑底白字畫面跑出>的時候輸入`ipconfig /flushdns`，然後按下enter鍵。 完成，你的DNS Cache已經手動清空了，本方法應該適用於任何版本的Windows。');
	},
};