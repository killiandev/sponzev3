const ytdl = require('ytdl-core');
const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => {


    if (!message.member.voiceChannel)
        return message.channel.send("Connecte toi à un salon vocal");
    if (!message.guild.me.voiceChannel)
        return message.channel.send("Je ne suis pas connecté")
    if (!message.guild.me.voiceChannelID !== message.member.voiceChannelID)
        message.guild.me.voiceChannel.leave();
            message.delete();


};

module.exports.help = {


    name: "stop"


}