const Discord = require('discord.js');



module.exports.run = async (message, args, Client) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !.`)
        }
                if (!Client.player.getQueue(message)) return message.channel.send(`Je ne joue pas de musique actuellement.`)
        if (Client.player.getQueue(message).paused) return message.channel.send(`La musique est déja en pause sur ce serveur .`)
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nous ne sommes pas dans le même salon vocal`);
        Client.player.skip(message);
};

module.exports.help = {
    name: 'skip',
    description: 'Joue la prochaine musique sur la liste. ',
    category: 'music',
    args: false,
    aliases: ['prochain', 'passe'],
}