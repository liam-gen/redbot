const Discord = require('discord.js')
const { inspect } = require('util');
const ms = require('ms')
module.exports.run = async (message, args, Client) => {
   if (message.author.id !== '700374770276892808') return
   try {
            var code = args.join(" ");

            var evaled = eval(code);
            console.log(inspect(evaled))

            const embed = new Discord.MessageEmbed()
                .setColor('#3A871F')

            .addField(":inbox_tray: Entrée: ", `\`\`\`${code}\`\`\``)
                .addField(":outbox_tray: Sortie: ", `\`\`\`js\n${clean(evaled)}\n\`\`\``)
                .setFooter('RedBot - 2021')

            message.channel.send({ embed })
        } catch (err) {
            const embed = new Discord.MessageEmbed()
                .setColor('#3A871F')

            .addField(":inbox_tray: Entée: ", `\`\`\`${code}\`\`\``)
                .addField(":outbox_tray: Sortie: ", `\`\`\`${clean(err)}\`\`\``)
                .setFooter('RedBot - 2021')

            message.channel.send({ embed })
        }

        function clean(text) {
            if (typeof(text) === 'string')
                return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
            else
                return text;
        }
}

module.exports.help = {
    category: 'owner',
    aliases: ['run', 'e'],
    name: "eval",
    description: "Evalue un bout de code",
    args: true,
    usage: "<code>",
    noArgsMsg: "Code requis !",
}