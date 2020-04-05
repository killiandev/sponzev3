
const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    message.delete(message.author)
            let Staff = ["682676275969654853", "490220102650953729"];
            if (Staff.includes(message.author.id)) {
                function resetBot() {
                    message.channel.send("*Redémarrge en cours...*").then(bot => bot.destroy().then(bot.login("Njk1Nzk1NTM2MDkxMDIxMzQy.XofYSA.OqeRKhJLnUlBn9oJhpCbVKgeNG4")))
                    console.log("Redémarrage en cours")
                }
            
                resetBot()
            
                message.channel.send("*Rédemarrage effectuer avec succes !*")
                console.log("Rédemarrer")
                }else{
                    return message.channel.send("Tu n'as pas les permissions.")
                }
}

module.exports.help = {
    name: "rl"
}