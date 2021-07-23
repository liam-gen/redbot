module.exports.run = async (message, args, Client) => {
   if (message.author.id !== '700374770276892808') return
   await message.channel.send('Arret du bot en cours ...')
   await process.exit()
}

module.exports.help = {
    category: 'owner',
    aliases: ['arreter', 's'],
    name: "stop-bot",
    description: "Arreter le bot",
    args: false,
    usage: "",
    noArgsMsg: "",
}