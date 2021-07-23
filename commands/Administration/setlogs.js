const fs = require(`fs`)
const util = require('../../utils.js')

const logs = require('../../logs.json')

module.exports.run = (message, args, Client) => {
    try{
        let channel = message.mentions.channels.first()
        logs[message.guild.id] = {
            channel: channel.id
        }
        fs.writeFileSync(util.dirname('logs.json'), JSON.stringify(logs))

        message.channel.send("Salon enregistré")
        channel.send(`Le salon a été définis en salon de logs par ${message.author.username}`)
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'setlogs', code, err)
    }
}

module.exports.help = {
    category: 'administration',
    aliases: ['logs', 'sl'],
    name: "set-logs",
    description: "Définir le salon de logs",
    permission: 'ADMINISTRATOR',
    args: true,
    usage: "<#salon>",
    noArgsMsg: "Vous devez renseigner un salon.",
}