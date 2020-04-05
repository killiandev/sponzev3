const Discord = require("discord.js")
 
module.exports = bot => {
    console.log(`Status prêt`);
 
    let statuses = [
        "s!aide",
        `${bot.users.size} || ${bot.guilds.size}`
    ]
 
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"})
    }, 50000)
}