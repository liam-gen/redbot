module.exports.run = async (message, args, Client) => {
   if (message.author.id !== '700374770276892808') return
   async function sleep(ms) {
        return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
   }
   await message.channel.send('Changelent du status en cours ...')
   await sleep(5000)
   const text = args.join(" ")
   const guilds = text.replace('{guilds}', Client.guilds.cache.size)
   await Client.user.setActivity(guilds)
}

module.exports.help = {
    category: 'owner',
    aliases: ['c-s', 'change-status'],
    name: "status",
    description: "Changer le status",
    args: true,
    usage: "<new_status>",
    noArgsMsg: "Tu dois renseigner le status",
}