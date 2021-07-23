const Discord = require('discord.js');



module.exports.run = async (message, args, Client) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !.`)
        }
 if (!Client.player.getQueue(message)) return message.channel.send(`Je ne joue pas de musique actuellement. Il est donc impossible de changer le son`)

        if (!args[0]) return message.channel.send(`Veuillez fournir un nombre valide , entre 1 et 100 !`);

        if (isNaN(args[0]) || 100 < parseInt(args[0]) || parseInt(args[0]) <= 0) return message.channel.send(`Veuillez fournir un nombre valide , entre 1 et 100 !`);

        if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`Veuillez fournir un nombre valide , entre 1 et 100 et sans virgules!`);

        Client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(`🔊 Volume défini sur **${args[0]}%** !`);
};

module.exports.help = {
    name: 'volume',
    description: 'Définis de son de la musique',
    category: 'music',
    args: false,
    aliases: ['v', 'sound'],
}