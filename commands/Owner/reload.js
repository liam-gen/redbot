module.exports.run = async (message, args, Client) => {
    async function sleep(ms) {
        return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
   }

   if (message.author.id !== '700374770276892808') return
   await sleep(3000)
   await Client.user.setActivity(`Relancement en cours ...`)
   await sleep(4000)
   await Client.user.setActivity(`Chargement de ${Client.commands.size} commandes ...`)
   await sleep(4000)
   await Client.user.setActivity(`Chargement de 3 évenements ...`)
   await sleep(4000)
   await Client.user.setActivity(`Sortie du sommeil ZZzzzzz ...`)
   await sleep(3000)
   await Client.user.setActivity(`RedBot - Relancement terminé dans 3s`)
   await sleep(3000)
   await Client.user.setActivity(`RedBot - 2021`)
}

module.exports.help = {
    category: 'owner',
    aliases: ['relancement', 'r'],
    name: "reload",
    description: "Relancer le bot",
    args: false,
    usage: "",
    noArgsMsg: "",
}