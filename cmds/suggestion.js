const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {
 
    message.delete()
 
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission")
 
    let argsresult;
    let mChannel = message.mentions.channels.first()
 
    if(!mChannel) return message.channel.send("Mention le salon ou tu veux mettre ton message")
    let messageToBot = args.slice(1).join(" ")
    if(!messageToBot) return message.channel.send("Merci de préciser ton message.")
 
    var embedSaying = new Discord.RichEmbed()
    .setTitle("<a:megapoof_beddo:695944376400085013> Suggestion")
    .setThumbnail(message.author.displayAvatarURL)
    .setColor("#454545")
    .setDescription(`${messageToBot}`)
    .setFooter(`Suggestion fait par ${message.author.username}`)
 
    mChannel.send(embedSaying).then(async msg => {
        await msg.react("✅")
        await msg.react("➖")
        await msg.react("❌")
    })
       
}
 
module.exports.help = {
    name: "sugg"
}