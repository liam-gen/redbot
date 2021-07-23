const Discord = require('discord.js')
const fs = require('fs')
const utils = require('../../config')
const prefixs = require('../../prefixs.json')
module.exports = (Client, message) => {
    if (message.channel.type === 'dm') return 
    let myPrefix = prefixs[message.guild.id].prefix || 'r?'
    if(!message.content.startsWith(myPrefix) || message.author.bot) return

    const args = message.content.slice(myPrefix.length).split(/ +/)
    
    const commandName = args.shift().toLowerCase()

    const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName))

    if (!command) return
    // if (!Client.commands.has(commandName)) return 

    if (command.help.category === 'music') return message.channel.send(`Mes commandes de musique ne fonctionnent actuellement pas :(`)

    if (command.help.args && !args.length) {
        let noArgsReply = `${command.help.noArgsMsg}`
        if (command.help.usage) noArgsReply += `\nUsage correct : \`${utils.prefix}${command.help.name} ${command.help.usage}\``
        return  message.channel.send(noArgsReply)
    }

    if (command.help.permission && !message.member.hasPermission(command.help.permission)){
        return message.channel.send(`Il vous manque la permission ${command.help.permission}`)
    }

    command.run(message, args, Client)
}