module.exports.run = (message, args, Client) => {
    try{
        const user = message.mentions.users.first()
        const reason = (args.splice(1).join(' ') || 'Aucune raison donée.')
        if (user){
            message.guild.member(user).kick(reason)
            message.channel.send(`J'ai bien kick ${user.tag}.`)
        } else {
            return message.channel.send(`L'utilisateur n'existe pas.`)
        }
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'kick', code, err)
    }
}

module.exports.help = {
    category: 'moderation',
    aliases: ['expulser', 'k'],
    name: "kick",
    description: "Expulser quelqun",
    args: true,
    usage: "<user> <raison (facultatif)>",
    noArgsMsg: "Vous devez renseigner l'utilisateur et une raison",
    permission: 'KICK_MEMBERS'
}