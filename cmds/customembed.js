const Discord = require('discord.js')
const superagent = require('superagent')


module.exports.run = async (bot, message, args) => {
    message.delete();

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("tu n'a pas la permissions pour faire cette commande !")
        let channel = message.mentions.channels.first()
        if(!args[0]) return message.channel.send(":warning: Merci de préciser le salon")

        let author = args[1]
        if(!args[1]) return message.channel.send(":warning: Merci de préciser l'auteur")

        let description = args[2]
        if(!args[2]) return message.channel.send(":warning: Merci de préciser une description")

        let AcardiaBg = new Discord.RichEmbed()
        .setAuthor(`${author}`)
        .setDescription(`${description}`)
        .setColor("#454545")
        .setFooter("⌛️ Developped by !0001")

        channel.send(AcardiaBg)
}

module.exports.help = {
    name: "embed"
}