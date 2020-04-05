const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 

    let msg = await message.channel.send("Generating...")
        let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
        console.log(body.file)
    if(!{body}) return message.channel.send("je n'arrive pas à accéder à ta demande.")

        message.delete();
    let Embed = new Discord.RichEmbed()
    .setColor("#3084DA")
        .setAuthor("Arcadia | chat", message.guild.iconURL)
    .setImage(body.file)
        .setTimestamp()
    .setFooter("⌛️ Developped by !0001", bot.user.displayAvatarURL)
        message.channel.send(Embed).then(m => m.delete(5000))


}

module.exports.help = {


    name: "chat"


}