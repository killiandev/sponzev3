const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 

    let msg = await message.channel.send("Generating...")
        let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
        console.log(body.message)
    if(!{body}) return message.channel.send("je n'arrive pas à accéder à ta demande.")

     message.delete();
    let Embed = new Discord.RichEmbed()
    .setColor("#3084DA")
        .setAuthor("Arcadia | chien", message.guild.iconURL)
    .setImage(body.message)
        .setTimestamp()
    .setFooter("⌛️ Developped by !0001", bot.user.displayAvatarURL)
        message.channel.send(Embed).then(m => m.delete(5000))


}

module.exports.help = {


    name: "chien"


}