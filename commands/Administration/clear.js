const fs = require('fs')
const util = require('../../utils.js')
const error = require('../../erreurs.json')
module.exports.run = (message, args, Client) => {
    let number = parseInt(args[0])
    if (isNaN(number)) return message.channel.send(`Veuillez spécifier un nombre valide.`)
    message.channel.bulkDelete(number).then(messages => {
        message.channel.send(`J'ai supprimé ${messages.size} messages`)
    }).catch(err => {
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'clear', code, err)
    })
}

module.exports.help = {
    category: 'administration',
    aliases: ['supprimer'],
    name: "clear",
    description: "supprimer un nombre de messages donés",
    args: true,
    usage: "<nombre>",
    noArgsMsg: "Vous devez spécifier un nombre de messages a supprimer",
    permission: 'MANAGE_MESSAGES'
}