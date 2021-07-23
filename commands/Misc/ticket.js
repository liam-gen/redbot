/* message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Welcome to your ticket!").setDescription("We will be with you shortly").setColor("00ff00"))
        })
        */

module.exports.run = (message, args, Client) => {
    try {
        message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Bienvenue dans votre ticket !").setDescription("Veuillez expliquer votre demande. Le staff de ce serveur vous répondra sous peu !").setColor("00ff00"))
        })
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'ticket', code, err)
    }
}

module.exports.help = {
    category: 'misc',
    aliases: ['ticket'],
    name: "ticket",
    description: "Ouvrir un ticket",
    args: false,
    usage: "",
    noArgsMsg: "",
}