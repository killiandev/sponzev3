const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


        message.delete();
    let aEmbed = new Discord.RichEmbed()
    .setColor("#3084DA")
        .setTitle("Server Info")
            .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
            .addField("**Guild Name**", `${message.guild.name}`, true)
        .addField("**Guild Owner**", `${message.guild.owner}`, true)
            .addField("**Member Count**", `${message.guild.memberCount}`)
        .addField("**Role Count**", `${message.guild.roles.size}`, true)
            .setFooter(`⌛️ Developped by !0001`, bot.user.displayAvatarURL);
        message.channel.send(aEmbed)


}


module.exports.help = {

    
    name: "servinfo"


}