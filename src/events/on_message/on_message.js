module.exports = {
    name: 'messageCreate',
    async execute(interaction){
        if(interaction.author.bot) return 0 //判斷訊息來源是不是bot
        switch (interaction.guildId) {
            case '811880841906749501': //貓咪教徒
                break;
            case '1008691046860992542'://高大資工115級
                break
            case '1080356542286667836'://資工大群
                break
            default:
                break;
        }
        
    }
}