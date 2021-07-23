const error = require('../../erreurs.json')
const discord = require('discord.js')
module.exports.run = (message, args, Client) => {
   if (message.author.id !== '700374770276892808') return
   
   if (!args[0]) return message.channel.send(error)
   if(!error[args[0]]) return message.channel.send(`Code d'erreur invalide :(`)
   if (args[1] === 'name') return message.channel.send(error[args[0]].erreur.name)
   if (args[1] === 'message') return message.channel.send(error[args[0]].erreur.message)
   if (args[1] === 'method') return message.channel.send(error[args[0]].erreur.method)
   if (args[1] === 'path') return message.channel.send(error[args[0]].erreur.path)
   if (args[1] === 'stats') {
       let myErr = error[args[0]].erreur
       let embed = new discord.MessageEmbed()
       .setTitle('Erreur - Stats')
       .addField(name='Code', value=args[0], inline=true)
       .addField(name='Nom', value=myErr.name, inline=true)
       .addField(name='Message', value=myErr.message, inline=true)
       .addField(name='Methode', value=myErr.method, inline=true)
       .addField(name="Chemin d'accès", value=myErr.path, inline=true)
       .setColor('#00ff00')
       return message.channel.send(embed)
   }
}

module.exports.help = {
    category: 'owner',
    aliases: ['erreur', 'fe'],
    name: "error",
    description: "Chercher une erreur",
    args: false,
    usage: "<code>",
    noArgsMsg: "Erreur requise. Protocole 542 sfa.",
}