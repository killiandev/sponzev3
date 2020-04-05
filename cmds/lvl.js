const Discord = require("discord.js");
const exp = require("../exp.json")

module.exports.run = async (bot, message, args) => {
        if(!exp[message.author.id]) {
    exp[message.author.id] = {
            exp: 0,
                niveau: 1
    }
        }
    let currentExp = exp[message.author.id].exp;
        let currentNiv = exp[message.author.id].niveau;
    let NextLevel = currentNiv * 20;
        let expNeed = NextLevel - currentExp;


        let nivEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor("#454545")
            .addField("Niveau :", currentNiv, true)
        .addField("xp :", currentExp, true)
            .setFooter(`${expNeed} points d'exp requis pour le prochain niveau`)
        message.channel.send(nivEmbed).then(m => m.delete(10000))

}

module.exports.help = {
    name: "rank"
}