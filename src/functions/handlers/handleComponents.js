const {readdirSync, readdir} = require('fs')

module.exports = (client) =>{
    client.handleComponents = async() =>{
        const componentFolders = readdirSync(`./src/components`)
        for (const folder of componentFolders) {
            const componentFiles = readdirSync(`./src/components/${folder}`).filter((file) => file.endsWith('js'))
            const {buttons ,selctMenus,modals} = client
            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`)
                        buttons.set(button.data.name,button)
                        console.log(`${file}已上傳`)
                    }
                    break;
                case "slectMenu":
                    for (const file of componentFiles) {
                        const menu = require(`../../components/${folder}/${file}`)
                        selctMenus.set(menu.data.name,menu)
                        console.log(`${file}已上傳`) 
                    }
                case "modals":
                    for (const file of componentFiles) {
                        const modal = require(`../../components/${folder}/${file}`)
                        modals.set(modal.data.name,modal)
                        console.log(`${file}已上傳`)
                    }
                    break
                
                default:
                    break;
            }
        }
    }
}