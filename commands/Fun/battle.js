const minigames = require('discord-minigames')

module.exports.run = (message, args, Client) => {
    try{
        let member = message.mentions.members.first()
        if (!member) return message.channel.send(`Veuillez mentionner un utilisateur valide.`)
        minigames.startBattle(member, message)
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'battle', code, err)
    }
}

module.exports.help = {
    category: 'fun',
    aliases: ['bataille'],
    name: "battle",
    description: "Fais une bataille avec un joueur",
    args: false,
    usage: "<@user>",
    noArgsMsg: ""
}