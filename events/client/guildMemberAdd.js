const { MessageEmbed } = require('discord.js')
module.exports = (Client, member) => {
    const logs = require('../../logs.json')


    const embed = new MessageEmbed()
    .setTitle('LOGS - Un nouveau membre')
    .addField(name='Nom', value=member.tag, inline=true)
    .addField(name='Id', value=member.id, inline=true)
    .setColor('GREEN')
    .setTimestamp()
    .setThumbnail(member.displayAvatarURL)
    .setFooter('RedBot - Logs')
    const logChannel = logs[channel.guild.id].channel
    Client.channels.cache.get(logChannel).send(embed)
}