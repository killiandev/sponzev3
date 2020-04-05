const discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.slice(1).join(' ');
    let logs = message.guild.channels.find('name', 'sponze-logs');

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('');

    if (!target) return message.reply(':no_entry_sign: Merci de mention un membre à ban.');
        if (!reason) return message.reply('Peut tu me préciser la raison?');
    if (!logs) return message.reply("Merci de crée un salon: `sponze-logs`");
    
        let embed = new discord.RichEmbed()
        .setColor('#454545')
            .setThumbnail(target.user.avatarURL)
        .addField(':pencil: Membre ban', `${target.user.username} ID ${target.user.id}`)
            .addField(':pencil: Auteur', `${message.author.username} ID ${message.author.id}`)
        .addField(':pencil: Heure', message.createdAt)
            .addField(':pencil: Salon', message.channel)
        .addField(':pencil: Raison', reason)
            .setFooter('⌛️ Developped by !0001', target.user.displayAvatarURL);

        message.channel.send(`${target.user.username} à été ban par ${message.author} pour ${reason}`).then(m => m.delete(5000));
    target.ban(reason);
        logs.send(embed);


};

module.exports.help = {


    name: 'ban',


};
