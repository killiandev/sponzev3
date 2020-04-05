const ytdl = require('ytdl-core');
const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => {


    if (!message.member.voiceChannel)
return message.channel.send("Connecte toi à un salon vocal")
    if (message.guild.me.voiceChannel)
return message.channel.send("je suis déjà connecté à un salon")
    if (!args[0])
return message.channel.send("Merci de préciser un URL Youtube")

        const info = await ytdl.getInfo(args[0]);
        const connection = await message.member.voiceChannel.join();
        const dispatcher = await connection.playStream(
            ytdl(args[0], { filter: 'audioonly' })
        );
        message.channel.send(`${info.title}  ajouté`)


};

module.exports.help = {


    name: "p"


}