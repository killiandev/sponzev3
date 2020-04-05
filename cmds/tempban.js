const Discord = require("discord.js")
const ms = require("ms")
 
module.exports.run = async (bot, message, args) => {
 
    message.delete()
 
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission.")
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return ("Merci de m'ajoutez la permission `ADMINISTRATOR` pour utilisez cette commande.")
 
    let banu = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!banu) return message.channel.send("Mention le membre à tempban.")
 
    let reason = args.slice(2).join(" ");
    if(!reason) reason = "Aucune raison données."
 
    let bantime = args[1];
    if(!bantime) return message.channel.send("Précise le temps du tempban.")
 
    await banu.ban()
 
    let banLogEmbed = new Discord.RichEmbed()
    .setColor("#454545")
    .setAuthor(`${message.guild.name} *logs*`, message.guild.iconURL)
    .addField("Action", "**TEMPBAN**")
    .addField("Membre tempban", banu.user.username)
    .addField("Auteur ayant tempban", message.author.tag)
    .addField("Raison", reason)
 
    let lChannel = message.guild.channels.find(c => c.name === "sponze-logs")
    lChannel.send(banLogEmbed)
 
    setTimeout(() => {
 
        try {
            message.guild.unban(banu , {reason: reason})
        } catch(e) {
            console.log(e.message)
        }
 
        let banLogEmbed = new Discord.RichEmbed()
        .setColor("#454545")
        .setAuthor(`${message.guild.name} *logs*`, message.guild.iconURL)
        .addField("Action", "**UNBAN**")
        .addField("Membre unban", banu.user.username)
   
        let lChannel = message.guild.channels.find(c => c.name === "sponze-logs")
        lChannel.send(banLogEmbed)
 
    }, ms(bantime))
       
}
 
module.exports.help = {
    name: "tempban"
}