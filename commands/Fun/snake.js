const minigames = require('discord-minigames')

module.exports.run = (message, args, Client) => {
    try{
        const snake = new minigames.snake(message)
        snake.create(message)
    } catch (err){
        let code = Math.floor(Math.random() * 100000)
        Client.emit('errorAdd', message, 'snake', code, err)
    }
}

module.exports.help = {
    category: 'fun',
    aliases: ['serpent'],
    name: "snake",
    description: "Joue au jeu snake",
    args: false,
    usage: "",
    noArgsMsg: "",
    status: 'Bêta'
}