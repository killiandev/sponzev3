const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


        message.delete()
            let TicketEmbed = new Discord.RichEmbed()
        .setColor("#454545")
            .setAuthor("Arcadia | Ticket")
        .setDescription("Pour créer un ticket, appuyez sur la réaction")
            .setFooter("⌛️ Developped by !0001")
        message.channel.send(TicketEmbed).then(async msg => {
            msg.react("🎟️")
        })
    }


module.exports.help = {


    name: "ticket"


}