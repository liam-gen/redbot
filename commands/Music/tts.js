const Discord = require('discord.js');

const discordTTS = require("discord-tts");

module.exports.run = async (message, args, Client) => {
    const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !.`)
        }
        const name = args.join(" ");
        if (!name) {
            return message.channel.send(`Veuillez me dire ce que je doit dire dans le salon vocal..`)
        }
        if (name.length > 200 || name.length < 3) return message.channel.send('Votre texte doit faire entre 3 et 200 caractères !');
        if (message.client.player.getQueue(message)) return message.channel.send(`Il y a déja une musique en cours.`)

        const broadcast = Client.voice.createBroadcast();
        var channelId = message.member.voice.channelID;
        let channel = Client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(name, lang="fr-FR", speed=1));
            message.channel.send(`Je dit votre message dans le salon vocal..`)

            const dispatcher = connection.play(broadcast)
            .then(connection => {
                channel.leave()
            });
        });


};

module.exports.help = {
    name: 'tts',
    description: 'Fait moi parler en vocal !',
    category: 'music',
    args: false,
    aliases: ['speak'],
    usage: '<texte>',
}