const { MessageEmbed } = require('discord.js')
const moment = require('moment')
module.exports.run = (message, args, Client) => {
    try{
        const member = message.guild.member(message.mentions.users.first())

        let user = member.user

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(user.displayAvatarURL())
        .addField(`Informations a propos de **${user.tag}**`, `- Nom : ${user.username}\n- Bot : ${user.bot ? 'Oui' : 'Non'}\n- Créer le : ${moment(user.createdAt).format('DD/MM/YYYY | hh:mm')}\n- Rôles : \n \`${member.roles.cache.map(roles => `${roles.name}`)}\``)
        message.channel.send(embed)
    }catch (err) {
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'userinfo', code, err)
    }
}

module.exports.help = {
    category: 'information',
    aliases: ['userinfo', 'ui'],
    name: "user-info",
    description: "Voir des informations sur un utilisateur",
    args: true,
    usage: "<user>",
    noArgsMsg: "Tu dois renseigner un utilisateur",
}