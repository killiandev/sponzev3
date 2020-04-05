const Discord = require("discord.js");

    module.exports.run = async (bot, message, args) => {
 
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas la permission")
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas la permission")
     
        let aMember = message.mentions.members.first()
        if(!aMember) return message.channel.send("Mentionne du membre")
        let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
        if(!role) return message.channel.send("Mention/id du grade.")
     
        if(!aMember.roles.has(role.id)) {
            return message.channel.send(`${aMember} n'as pas ce rôle.`)
        } else {
            await aMember.removeRole(role.id)
            aMember.createDM().then( channel => {
                channel.send(`Le rôle, **${role.name}** vous a été enlever`)
            })
        }
     
    }
     
    module.exports.help = {
        name: "rerole"
    }




module.exports.help = {


    name: "rerole"


}