const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


    if(!bot.lockit) bot.lockit = [];
    let ValidInlocks = ["release", "unlock"]

        if(ValidInlocks.includes()) {
            message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: nullm
            }).then(() => {
                message.channel.send("Le salon est re-open.")
            })
        } else {
            message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
            }).then(() => {
                message.channel.send("Le salon est fermer.")
            })
        }


}

module.exports.help = {


    name: "lock"


}