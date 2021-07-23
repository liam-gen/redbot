const discord = require('discord.js');
module.exports = (client, message, queue, track) => {


    let embed = new discord.MessageEmbed()
        .setColor('#00ff00')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 512 }))

    .setTitle(`Musique ajoutée`)
        .setDescription(`[${track.title}](${track.url})[<@${track.requestedBy.id}>]\n**Durée **: ${track.duration}`)
        .setThumbnail(track.thumbnail)
    message.channel.send(embed)
};