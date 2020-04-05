const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermissions(["MANAGE_MESSAGES","ADMINISTRATOR"])) return message.channel.send("Tu n'a pas la permission")
    let argsresult;
    let mChannel = message.mentions.channels.first()
        message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
    if(!argsresult) return message.channel.send("Merci de préciser le message que vous voulez envoyer.")
        mChannel.send(argsresult)
            } else {
                argsresult = args.join(" ")
            if(!argsresult) return message.channel.send("Merci de préciser le message que vous voulez envoyer.")
        message.channel.send(argsresult)
    }

}

module.exports.help = {


    name: "msg"


}