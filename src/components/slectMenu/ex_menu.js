module.exports = {
    data: {
        name: `ex_menu`
    },
    async execute(interaction,client){
        
        await interaction.update({
            content : `${interaction.values[0]}`,components: []
        })
        
    }
}