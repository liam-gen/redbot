

const util = require('../../utils.js')
const users = require('../../beta.json')
module.exports.run = async (message, args, Client) => {
    try {
        if (users[message.author.id]) return message.channel.send("Vous êtes déjâ testeur.")
        await message.channel.send(`Votre inscription au tests bêta a été envoyée. Cela peut prendre quelques minutes`)
        await util.sleep(Math.floor(Math.random() * 50000))
        await console.log('Send')
        await message.author.send(`Hey ${message.author} !\nVotre inscription au programme bêta a été validé.`)
        await util.addTesteur(message.author.id)
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'beta', code, err)
    }
}

module.exports.help = {
    category: 'misc',
    aliases: ['bêta', 'testeur'],
    name: "beta",
    description: "Devenir utilisateur bêta sur le bot.",
    args: false,
    usage: "",
    noArgsMsg: "",
}