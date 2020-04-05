const Discord = require("discord.js")
let object = ["⛰️" , "✂️", "🧻"]
let calcul = Math.floor((Math.random() * object.length))
 
module.exports.run = async (bot, message, args) => {
 
    if(!args[0]) return message.channel.send("Svp, choisissez entre ``pierre`` ``papier`` ``ciseaux``")
 
    var RPSEMBED = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(message.guild.me.displayName, bot.user.displayAvatarURL)
    .setDescription(`**Vous avez sélectionner :** **${args[0]}** \n **Le bot à sélectionner : ${object[calcul]}**`)
 
    message.channel.send(RPSEMBED)
}
module.exports.help = {
    name: "rps"
}