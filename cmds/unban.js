module.exports.run = async (bot, message, args) => {
 
    message.delete()
        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Vous n'avez pas la permission")
     
        let unbanMember = await bot.fetchUser(args[0])
       if(!unbanMember) return message.channel.send("La personne à unban est introuvable.")
     
       let reason = args.slice(1).join(" ")
       if(!reason) reason = "Aucune raison donnée"
       if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Vérifier mes permissions")
     
        try{
            message.guild.unban(unbanMember, {reason: reason})
            message.channel.send(`${unbanMember} à été unban du serveur`)
        } catch(e) {
            console.log(e.message)
        }
     
        let embed = new Discord.RichEmbed()
        .setColor(colours.green_dark)
        .setAuthor(`${message.guild.name} LOG`, message.guild.iconURL)
        .addField("Action", "unban")
        .addField("Membre unban", `${unbanMember.username} (${unbanMember.id})`)
        .addField("Auteur", message.author.username)
        .addField("Raison ", reason)
        .setTimestamp()
        .setFooter("⌛️ développed by !0001")
        let lChannel = message.guild.channels.find(c => c.name === "sponze-logs")
        lChannel.send(embed)
    }
     
    module.exports.help = {
        name: "unban"
    }