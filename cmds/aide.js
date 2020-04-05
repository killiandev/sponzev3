const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


        if(args[0] == "aide") return message.channel.send(`Il te manque mon prefix: ${prefix}`)
            if(args[0]) {
        let command = args[0];
            if (bot.commands.has(command)) {
        var Aembed = new Discord.RichEmbed()
            .setColor("#FF0000")
                .setAuthor(`Arcadia`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
                .setDescription(`Le prefix du bot est: \`s!\``)
            message.channel.send(Aembed)
                 }
            }
        if(!args[0]) {
            message.delete();
        let aembed = new Discord.RichEmbed()
            .setAuthor(`Developped by !0001`, message.guild.iconURL)
        .setColor("#3084DA")
            .setDescription(`${message.author.username} regarde t'es message priver.`)

        let vembed = new Discord.RichEmbed()
            .setAuthor(`Arcadia`, message.guild.iconURL)
        .setColor("#3084DA")
            .setDescription(`Voici tout les commandes du bot \`Sponze\` !\n Le prefix du bot est: \`s!\``)
        .addField(`<:settings:696132639123308594> Commandes fun :`, "`chat`, `chien`")
            .addField(`<:settings:696132639123308594> Commandes utiles :`, "`servinfo`, `userinfo`, `ticket`", true)
        .addField(`<:settings:696132639123308594> Commandes de modération :`, "`ban`, `kick`, `mute`, `unmute`, `tempmute`, `report`, `unban`, `tempban`, `embed`, `say`, `clear` ", true)
            .addField(`<:settings:696132639123308594> Commandes d'administration :`, "`Anti-insulte`, `MemberCount`, ``", )

        .setFooter(`⌛️ Developped by !0001`, bot.user.displayAvatarURL)
            message.channel.send(aembed).then(m => m.delete(5000))
        message.author.send(vembed)
        
        }
        

}

module.exports.help = {


    name: "aide"


}