const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


if(!message.member.hasPermission("MANAGE_MESSAGES")) 
return message.reply ("Tu n'a pas la permission.");
    if(!args[0])
    return message.reply("commandes: s!purge <0/100>");

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`J'ai purge ${args[0]} message.`).then(msg => msg.delete(5000))

    })

}

module.exports.help = {


    name: "purge"


}