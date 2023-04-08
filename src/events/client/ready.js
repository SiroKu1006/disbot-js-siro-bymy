module.exports = {
    name: 'ready',
    once : true,
    async execute(client){
        console.log(`${client.user.tag} is online.`)
        user = process.env.MyDiscordId
        try {
            client.users.send(user, 'Uptime Reboot')
        } catch (err) {
            console.error(err)
        }
    }
}