const fs = require(`fs`)
const util = require('../../utils.js')

const prefix = require('../../prefixs.json')

module.exports.run = (message, args, Client) => {
    try{
        prefix[message.guild.id] = {
            prefix: args[0]
        }
        fs.writeFileSync(util.dirname('prefixs.json'), JSON.stringify(prefix))

        message.channel.send("Préfix enregistré")
    } catch(err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'setprefix', code, err)
    }
}

module.exports.help = {
    category: 'administration',
    aliases: ['prefix', 'pr'],
    name: "set-prefix",
    description: "Définir le préfix du serveur",
    permission: 'ADMINISTRATOR',
    args: true,
    usage: "<prefix>",
    noArgsMsg: "Vous devez renseigner un préfix.",
}