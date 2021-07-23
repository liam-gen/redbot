// Discord & Client & Fs & Commands
const Discord = require('discord.js')
const fs = require('fs')
const Client = new Discord.Client()
Client.commands = new Discord.Collection()

console.error('Whoops, something bad happened. No it\'s joke xD');

// Utils 
const utils = require('./config')

// Player 
const { Player } = require('discord-player');
const player = new Player(Client, {
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: true,
    timeout: 0,
    volume: 100,
    quality: 'high',
});
Client.player = player;

// Charger les commandes et les evenements

const loadCommands = (dir = './commands/') => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(file => file.endsWith('.js'))

        for (const file of commands){
            const getFileName = require(`${dir}/${dirs}/${file}`)
            Client.commands.set(getFileName.help.name, getFileName)
            console.log(`Commande chargée : ${getFileName.help.name}`)
    }
})
}

const loadEvents = (dir = './events/') => {
    fs.readdirSync(dir).forEach(dirs => {
        const events = fs.readdirSync(`${dir}/${dirs}/`).filter(file => file.endsWith('.js'))

        for (const event of events){
            const evt = require(`${dir}/${dirs}/${event}`)
            const evtName = event.split(".")[0]
            Client.on(evtName, evt.bind(null, Client))
            console.log(`Event chargée : ${evtName}`)
    }
})
}


const loadPlayerEvents = (dir = './player-events/') => {
    fs.readdirSync(dir).forEach(dirs => {
        const events = fs.readdirSync(`${dir}/${dirs}/`).filter(file => file.endsWith('.js'))

        for (const event of events){
            const evt = require(`${dir}/${dirs}/${event}`)
            const evtName = event.split(".")[0]
            Client.player.on(evtName, evt.bind(null, Client))
            console.log(`Player Event chargée : ${evtName}`)
    }
})
}

loadPlayerEvents()
loadCommands()
loadEvents()


// Login
Client.login(utils.token)