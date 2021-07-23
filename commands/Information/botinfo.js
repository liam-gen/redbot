const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports.run = (message, args, Client) => {
    try{
        const embed = new MessageEmbed()
        .setTitle(Client.user.username)
        .addFields(
            { name: 'Mémoire', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, inline: true},
            { name: 'Uptime', value: `${Math.floor(Client.uptime / 1000 / 60).toString()} minutes`, inline: true},
            { name: '\u200b', value: '\u200b', inline: true},
            { name: 'Serveurs', value: `${Client.guilds.cache.size.toString()}`, inline: true},
            { name: 'Salons', value: `${Client.channels.cache.size.toString()}`, inline: true},
            { name: 'Utilisateurs', value: `${Client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true},
        )

        message.channel.send(embed)
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'botinfo', code, err)
    }
}

module.exports.help = {
    category: 'information',
    aliases: ['botinfo', 'bi'],
    name: "bot-info",
    description: "Voir les informations du bot",
    args: false,
    usage: "",
    noArgsMsg: "",
}