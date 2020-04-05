const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json")
const exp = require("./exp.json")
require("./util/eventHandler")(bot)
bot.commands = new Discord.Collection();

bot.login(config.token)

fs.readdir("./cmds/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Aucune commande trouver, désolé.")
        return;
    }
jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${f} prêt !`);
        bot.commands.set(props.help.name, props)
    })
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args)

    let addExp = Math.floor(Math.random() * 5) + 1;
        if(!exp[message.author.id]) {
            exp[message.author.id] = {
                exp: 0,
                niveau: 1
            }
        }
    let currentExp = exp[message.author.id].exp;
    let currentNiv = exp[message.author.id].niveau;
    let NextLevel = currentNiv * 20;
        
        exp[message.author.id].exp = currentExp + addExp;

            if(NextLevel <= currentExp) {
                exp[message.author.id].niveau +=1;
            message.channel.send(`Bravo ${message.author}, tu est passé niveau ${currentNiv + 1}`).then(msg => msg.delete(5000))
                
                fs.writeFile("./exp.json", JSON.stringify(exp), err => {
                    if(err) console.log(err);
                })
            }
});


const cdseconds = 5;
 
bot.on("messageReactionAdd", (reaction, user) => {
    if(user.bot) return;
    const message = reaction.message;
    const member = message.guild.members.get(user.id)
    const STAFF = message.guild.roles.find(`name`, 'STAFF')
    const everyone = message.guild.roles.find(`name`, '@everyone')
 
    if(
        ["🎟️", "🔒"].includes(reaction.emoji.name)
    ) {
        switch(reaction.emoji.name) {
 
            case "🎟️":
 
            var TicketList = [
                "ticket-001",
                "ticket-002",
                "ticket-003"
            ]
 
            let result = Math.floor((Math.random() * TicketList.length))
 
            let categoryID = "695868005069881374";
 
            var bool = false;
 
            if(bool == true) return;
 
            message.guild.createChannel(TicketList[result], "text").then((createChan) => {
               
                createChan.setParent(categoryID).then((settedParent) => {
                    settedParent.overwritePermissions(everyone, {
                        "READ_MESSAGES": false
                    });
 
                    settedParent.overwritePermissions(member, {
                        "SEND_MESSAGES": true,
                        "ADD_REACTIONS": true,
                        "ATTACH_FILES": true,
                        "READ_MESSAGES": true,
                        "READ_MESSAGE_HISTORY": true
                    })
 
                    settedParent.overwritePermissions(STAFF, {
                        "READ_MESSAGES": true,
                        "MANAGE_MESSAGES": true
                    })
 
                    settedParent.overwritePermissions(member, {
                        "SEND_MESSAGES": true,
                        "ADD_REACTIONS": true,
                        "ATTACH_FILES": true,
                        "READ_MESSAGES": true,
                        "READ_MESSAGE_HISTORY": true
                    })
 
                    let embedTicketOpen = new Discord.RichEmbed()
                    .setTitle("Bonjour")
                    .setColor("#454545")
                    .setDescription("Dîtes votre question ou message ici s'il vous plaît")
                    .setFooter("Developped by !0001")
 
                    settedParent.send(embedTicketOpen).then( async msg => {
                        await msg.react("🔒")
                    })
                })
            })
 
            break;
 
            case "🔒":
 
            message.channel.send("**Le salon se fermera dans une 10 de secondes...**")
 
            setTimeout(() => {
                message.channel.delete()
            }, cdseconds * 1500)
 
            let embedTicketClose = new Discord.RichEmbed()
            .setTitle(`Le ticket ${message.channel.name} a été fermer`)
            .setColor("#454545")
            .setFooter("Developped by !0001")
 
            let logChannel = message.guild.channels.find("name", "sponze-logs")
 
            logChannel.send(embedTicketClose)
            break;
        }
    }
})



bot.on('message', async message => {

let blacklisted = ['fdp', 'ntm', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'ducon', 'dugland', 'enculé', 'fachiste', 'imbécile', 'lavette', 'ptn', ];
 
let foundInText = false;

for(var i in blacklisted) {
    if(message.content.toLocaleLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
}
if(foundInText) {
    message.delete()
    message.channel.send("Ce `MOT` n'est pas autoriser sur `ARCADIA`, tu peux te prendre un `MUTE`.")
}});

bot.on('guildMemberAdd', user => {
 
    let newEmbed = new Discord.RichEmbed()
    .setDescription(user.user.username + " **a rejoint le monde parfait d'Arcadia**")
    .setFooter(`Nous sommes désormais ` + user.guild.memberCount)
    .setColor('RANDOM')
    user.guild.channels.get("694883625036021782").sendMessage(newEmbed)
 
    let myGuild = bot.guilds.get('694883625036021780')
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('694883625036021784')
    memberCountChannel.setName(`Membres: ` + memberCount)

    let Membres = user.guild.roles.get('695910291082313798')
    user.addRole("Joueur")
})
bot.on("guildMemberRemove", user => {
    let removeEmbed = new Discord.RichEmbed()
    .setDescription(user.user.username + " **a quitté le monde parfait d'Arcadia**")
    .setFooter(`Nous sommes désormais ` + user.guild.memberCount)
    .setColor('RANDOM')
    user.guild.channels.get("694883625036021782").sendMessage(removeEmbed)
 
    let myGuild = bot.guilds.get('694883625036021780')
    let memberCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('694883625036021784')
    memberCountChannel.setName(`Membres: ` + memberCount)
})
