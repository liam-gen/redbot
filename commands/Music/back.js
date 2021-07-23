const Discord = require('discord.js');



module.exports.run = async (message, args, Client) => {

        const voice = message.member.voice.channel;
        if (!voice) {
            return message.channel.send(`Vous devez d'abord rejoindre un salon vocal !`)
        }

        if (!Client.player.getQueue(message)) return message.channel.send(`Je ne joue pas de musique actuellement.`)
   if(!Client.player.getQueue(message).previousTracks[0]){
            return message.channel.send(`Il n'y a pas de son avant celui actuel !`)
		}
        Client.player.back(message);
};

module.exports.help = {
    name: 'back',
    description: 'Joue la musique précédente',
    category: 'music',
    args: false,
    aliases: ['replay'],
}