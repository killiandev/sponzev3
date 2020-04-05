const Discord = require("discord.js");

 
module.exports.run = async (bot, message, args) => {
 
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Vous n'avez pas la permissions pour faire cette commande !")
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Veuillez m'ajoutez ces permissions `MANAGE_ROLES` + `ADMINISTRATOR` pour utilisez cette commande.")
 
    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!mutee) return message.channel.send("Veuillez mentionner la personne à mute.")
 
    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) return message.channel.send("Le grade `Muted` n'existe pas !")
 
    mutee.removeRole(muterole.id).then(() => {
        message.delete()
 
        let MuteEmbed = new Discord.RichEmbed()
        .setDescription(`U - Vous avez été unmute dans le serveur \`${message.guild.name}\``)
        .setColor("#454545")
   
        mutee.send(MuteEmbed).catch(err => console.log(err))
        message.channel.send(`${mutee.user.tag} à été mute.`)
        })
 
    let MuteLogEmbed = new Discord.RichEmbed()
    .setColor("#454545")
    .setAuthor(`${message.guild.name} *logs*`, message.guild.iconURL)
    .addField("Action", "**UNMUTE**")
    .addField("Membre unmute", mutee.user.username)
    .addField("Auteur", message.author.tag)
    .setFooter("⌛️ développed by !0001")
 
    let lChannel = message.guild.channels.find(c => c.name === "sponze-log")
    lChannel.send(MuteLogEmbed)
}
 
module.exports.help = {
    name: "unmute"
}