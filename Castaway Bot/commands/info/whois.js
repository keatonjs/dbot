const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "whois",
    aliases: ["who", "userinfo", "info"],
    description: "Returns user information",
    usage: "[username | id, | mention]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
        message.guild.channels.cache.filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        // User variables


        const embed = new Discord.MessageEmbed()
        .setTitle("User Stats")
        .setColor("#B800FF")
        .setThumbnail(member.user.displayAvatarURL())
        .addField("Display Name:", member.displayName)
        .addField("Created:", member.user.createdAt)
        .addField("Joined:", member.joinedAt)
        .addField('Status:', member.user.presence.status)
        .setTimestamp();
        message.channel.send(embed);
    }
}
