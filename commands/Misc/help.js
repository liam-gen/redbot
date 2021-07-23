const { MessageEmbed } = require('discord.js')
const { readdirSync } = require('fs')
const categoryList = readdirSync('./commands')
module.exports.run = (message, args, Client) => {
    try{
        if (!args.length){
            const embed = new MessageEmbed()
            .setColor("#00ff00")
            .addField("Commandes", "Voici la liste de mes commandes. Pour plus d'informatiosn tapez `r?help <command>`")

            for (const category of categoryList){
                let myCat = category.toLowerCase()
                embed.addField(`${category}`, `${Client.commands.filter(cat => cat.help.category === myCat).map(cmd => cmd.help.name).join(', ')}`);
            }

            return message.channel.send(embed)
        } else {
                const command = Client.commands.get(args[0]) || Client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]))
                if (!command) return message.channel.send("La commande n'a pas été trouvée")
                const embed = new MessageEmbed()
                .setTitle(` Aide - ${command.help.name}`)
                .setColor("#36393F")
                .addField('Nom', `\`${command.help.name}\``)
                .addField('Description', `\`${command.help.description}\``)
                .addField("Utilisation", command.help.usage ? `\`r?${command.help.name} ${command.help.usage}\`` : 'Aucun usage de cette commande')
                .addField("Status", command.help.status ? `${command.help.status}` : 'On')
                if (command.help.aliases.length > 1) embed.addField("Alias", `\`${command.help.aliases.join(", ")}\``)
                return message.channel.send(embed)
        }
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'help', code, err)
    }
}

module.exports.help = {
    category: 'misc',
    aliases: ['h', 'aide'],
    name: "help",
    description: "Avoir de l'aide sur une commandes ou sur toutes les commandes",
    args: false,
    usage: "",
    noArgsMsg: "",
}