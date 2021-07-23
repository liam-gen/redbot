const Discord = require('discord.js');



module.exports.run = async (message, args, Client) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !.`)
        }
        const name = args.join(" ");
        if (!name) {
            return message.channel.send(`Veuillez fournir un nom de chanson ou un lien.`)
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nous ne sommes pas dans le même salon vocal`);

        Client.player.play(message, name, true);
};

module.exports.help = {
    name: 'play',
    description: 'Joue la musique indiqué dans le salon vocal dans lequel vous êtes.',
    category: 'music',
    args: false,
    aliases: ['p', 'song'],
    usage: '<nom de la musique>',
}