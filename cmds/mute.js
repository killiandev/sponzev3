const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


            if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("tu n'a pas la permissions pour faire cette commande !")
        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("il me faut ces permissions `MANAGE_ROLES` + `ADMINISTRATOR` pour utilisez cette commande.")
                 let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send("Veuillez mentionner le membre à mute.")
        let reason = args.slice(1).join(" ");
    if(!reason) reason = "Aucune raison donnée"
        let muterole = message.guild.roles.find(r => r.name === "Muted")
        if(!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "Muted",
                    color: "#454545",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        "READ_MESSAGES": true,
                        "SEND_MESSAGES": false,
                        "ADD_REACTIONS": false
                    })
                })
            } catch(e) {
                console.log(e.stack);
            }
        }
        mutee.addRole(muterole.id).then(() => {
            message.delete()
     
            let MuteEmbed = new Discord.RichEmbed()
            .setDescription(`MUTED - Vous avez été mute dans le serveur \`${message.guild.name}\` avec comme raison : **${reason}**`)
            .setColor("#454545")
            .setFooter("⌛️ développed by !0001")
            mutee.send(MuteEmbed).catch(err => console.log(err))
            message.channel.send(`${mutee.user.tag} à été mute.`)
            })
     
        let MuteLogEmbed = new Discord.RichEmbed()
        .setColor("#454545")
        .setAuthor(`${message.guild.name} *logs*`, message.guild.iconURL)
        .addField("Action", "**mute**")
        .addField("Membre mute", mutee.user.username)
        .addField("Auteur", message.author.tag)
        .addField("Raison", reason)
        .setFooter("⌛️ développed by !0001")
     
        let lChannel = message.guild.channels.find(c => c.name === "sponze-logs")
        lChannel.send(MuteLogEmbed)
    }
module.exports.help = {


    name: "mute"


}