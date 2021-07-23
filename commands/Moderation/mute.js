const ms = require('ms')
module.exports.run = (message, args, Client) => {
    try{
        const user = message.guild.member(message.mentions.users.first())
        const reason = (args.splice(2).join(' ') || 'Aucune raison donée.')
        let muteTime = args[1]
        let mutedRole = message.guild.roles.cache.find(r => r.name === 'Muted')

        if (!mutedRole){
            let mutedRole =  message.guild.roles.create({
                data: {
                    name: 'Muted',
                    color: '#00FFFF',
                    permissions: []
                }
            })

            message.guild.channels.cache.forEach( (channel, id) => {
            channel.updateOverwrite(mutedRole, {
                SEND_MESSAGE: false,
                ADD_REACTION: false,
                CONNECT: false
            })
        })
        }

        user.roles.add(mutedRole.id)
        message.channel.send(`${user} a bien été mute pour une durée de ${ms(ms(muteTime))}`)

        setTimeout(() => {
            user.roles.remove(mutedRole.id)
            message.channel.send(`${user} a été démute !`)
        }, ms(muteTime))
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'mute', code, err)
    }
        
}

module.exports.help = {
    category: 'moderation',
    aliases: ['taire', 'm'],
    name: "mute",
    description: "Faire taire quelqun",
    args: true,
    usage: "<user> <temps> <raison (facultatif)>",
    noArgsMsg: "Vous devez renseigner l'utilisateur et une raison",
    permission: 'KICK_MEMBERS'
}