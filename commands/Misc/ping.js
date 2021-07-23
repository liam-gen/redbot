module.exports.run = (message, args, Client) => {
    try {
        message.channel.send(`:ping_pong: Ping (message) : \`${Date.now() - message.createdTimestamp}\`ms\n:ping_pong: Pong (client) : \`${Math.round(Client.ws.ping)}\`ms`)
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'ping', code, err)
    }
}

module.exports.help = {
    category: 'misc',
    aliases: ['pong', 'latence'],
    name: "ping",
    description: "Voir la latence du bot et de l'api discord",
    args: false,
    usage: "",
    noArgsMsg: "",
}