const Discord = require('discord.js');
const cheerio = require("cheerio");
const fetch = require("node-fetch");

module.exports.run = async (message, args, Client) => {
     const songName = args.join(" ");
        if (!songName) {
            return message.errorMessage(`Veuillez fournir un nom de chanson ou un lien.`)
        }


        try {

            const songNameFormated = songName
                .toLowerCase()
                .replace(/\(lyrics|lyric|official music video|audio|official|official video|official video hd|clip officiel|clip|extended|hq\)/g, "")
                .split(" ").join("%20");

            let res = await fetch(`https://www.musixmatch.com/search/${songNameFormated}`);
            res = await res.text();
            let $ = await cheerio.load(res);
            const songLink = `https://musixmatch.com${$("h2[class=\"media-card-title\"]").find("a").attr("href")}`;

            res = await fetch(songLink);
            res = await res.text();
            $ = await cheerio.load(res);

            let lyrics = await $("p[class=\"mxm-lyrics__content \"]").text();

            if (lyrics.length > 2000) {
                lyrics = lyrics.substr(0, 2000) + '..' + " [Clique ici]" + `(https://www.musixmatch.com/search/${songName})`;
            } else if (!lyrics.length) {
                return message.message.channel.send(`Je n'ai trouvé aucunne paroles pour ${songName}`)
            }
            try{
                message.channel.send(`\`\`\`diff\nParoles de ${songName}\n${lyrics}\`\`\``)
            } catch {
                return message.channel.send(`Le message est trop long. Voici un lien pour aller voir => https://www.musixmatch.com/search/${songName}`)
            }

        } catch (e) {
            return message.channel.send(`Je n'ai trouvé aucunnes paroles pour ${songName}`)

        }
};

module.exports.help = {
    name: 'lyrics',
    description: 'Rechercher les paroles d\'une chanson',
    category: 'music',
    args: false,
    aliases: ['paroles'],
}