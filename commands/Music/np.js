const Discord = require('discord.js');



module.exports.run = async (message, args, Client) => {
    const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !`)
        }

        if (!Client.player.getQueue(message)) return message.channel.send(`Je ne joue pas de musique actuellement.`)
        const track = await Client.player.nowPlaying(message);
        const filters = [];

        Object.keys(Client.player.getQueue(message).filters).forEach((filterName) => {
            if (Client.player.getQueue(message).filters[filterName]) filters.push(filterName);
        });

        message.channel.send(`\`\`\`\nEn cours actuellement\nNom : ${track.title}\nAuteur : ${track.author}\nAjouté par : ${track.requestedBy.tag}\nProgression : ${Client.player.createProgressBar(message, { timecodes: true })}\`\`\``)





};

module.exports.help = {
    name: 'np',
    description: 'Affiche le titre en lecture actuellement',
    category: 'music',
    args: false,
    aliases: ['now', 'now-play'],
}