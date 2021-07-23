const discord = require('discord.js');
module.exports = (client, message, track) => {

    let embed = new discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle(`Musique en cours`)
        .setDescription(`[${track.title}](${track.url})[<@${track.requestedBy.id}>]\n**Durée **: ${track.duration}`)
        .setThumbnail(track.thumbnail)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
    message.channel.send(embed)
};