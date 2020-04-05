const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    

        message.delete();
    let zEmbed = new Discord.RichEmbed()
    .setColor("#3084DA")
        .setTitle("User Info")
    .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username**", `${message.author.username}`, true)
        .addField("**Discriminator**", `${message.author.discriminator}`, true)
    .addField("**ID**", `${message.author.id}`)
        .addField("**Status**", `${message.author.presence.status}`, true)
    .addField("**Created At**", bot.user.createdAt)
        .setFooter(`⌛️ Developped by !0001`, bot.user.displayAvatarURL);
    message.channel.send(zEmbed)


}


module.exports.help = {

    
    name: "userinfo"


}