const Discord = require('discord.js');



module.exports.run = async (message, args, Client) => {

        const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !`)
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nous ne sommes pas dans le même salon vocal`);

        if (!Client.player.getQueue(message)) return message.channel.send(`Je ne joue pas de musique actuellement.`)
        if (!Client.player.getQueue(message).paused) return message.channel.send(`La musique n'est pas en pause sur ce serveur .`)

        Client.player.resume(message);

        message.channel.send(`⏸ La musique reprend sur le serveur !`);
};

module.exports.help = {
    name: 'resume',
    description: 'Enlève la pause',
    category: 'music',
    args: false,
    aliases: ['resume'],
}