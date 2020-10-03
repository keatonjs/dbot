const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    description: "Show's the servers info.",
    run: (client, message, args) => {

    let sicon = message.guild.iconURL();
    let serverEmbed = new Discord.MessageEmbed()
    .setTitle("Server Information")
    .setColor("#B800FF")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    message.channel.send(serverEmbed);
}
}