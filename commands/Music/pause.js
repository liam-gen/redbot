const Discord = require('discord.js');



module.exports.run = async (message, args, Client) => {

        const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !`)
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nous ne sommes pas dans le même salon vocal`);

        if (!Client.player.getQueue(message)) return message.channel.send(`Je ne joue pas de musique actuellement.`)
        if (Client.player.getQueue(message).paused) return message.channel.send(`La musique est déja en pause sur ce serveur .`)

        Client.player.pause(message);

        message.channel.send(`▶ La musique a été mise en pause sur le serveur  !`);
};

module.exports.help = {
    name: 'pause',
    description: 'Met la musique actuelle en pause',
    category: 'music',
    args: false,
    aliases: ['pause'],
}