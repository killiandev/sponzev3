const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
 
    message.delete();
   
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send("Merci de mentionner un membre").then(m => m.delete(5000))
    let reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send(`Merci de dire la raison du report pour pouvoir report l\'utilisateur **${target.user.tag}**`).then(m => m.delete(5000))
 
    let rChannel = message.guild.channels.find(c => c.name === "sponze-logs")
 
    message.channel.send("Ton report à été envoyer au staff, Merci pour ta contribution.").then(m => m.delete(5000))
    rChannel.send(`**${message.author.tag}** à report **${target.user.tag}** pour la raison : ${reason}.`).then(async msg => {
        msg.react("✅")
        msg.react("➖")
        msg.react("❌")
    })
}
 
module.exports.help = {
    name: "report"
}