const { MessageEmbed } = require('discord.js')
module.exports = (Client, channel) => {
    const logs = require('../../logs.json')

    let type = channel.type

    if (type === 'dm') return

    let text = type.replace('text', 'Textuel')
    let voice = text.replace('voice', 'Vocal')

    const embed = new MessageEmbed()
    .setTitle('LOGS - Création de salon')
    .addField(name='Nom', value=`#${channel.name}`, inline=true)
    .addField(name='Type', value=voice, inline=true)
    .setColor('GREEN')
    .setTimestamp()
    .setFooter('RedBot - Logs')
    const logChannel = logs[channel.guild.id].channel
    Client.channels.cache.get(logChannel).send(embed)
}