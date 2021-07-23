module.exports.run = (message, args, Client) => {
    try{
        message.delete()
        message.channel.send(args.join(" "))
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'say', code, err)
    }
}

module.exports.help = {
    category: 'misc',
    aliases: ['s', 'dire'],
    name: "say",
    description: "Fait parler le bot",
    permission: 'ADMINISTRATOR',
    args: true,
    usage: "<texte>",
    noArgsMsg: "Tu dois renseigner quelque chose que devra dire le bot !",
}