const Discord = require("discord.js");

module.exports = {
    name: "announce",
    run: async(client, message, args) => {
        let mesg = args.join(" ")
        if(!mesg) return message.channel.send("Please give me a message.")
        let announceEmbed = new Discord.MessageEmbed()
        .setTitle("New Announcement")
        .setColor("#B800FF")
        .setDescription(`${mesg}`)
        .setTimestamp();
        message.channel.send(announceEmbed)
    }
}