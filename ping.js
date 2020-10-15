const Discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "Ping!",
  execute(message, args) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#3d803d')
	.setTitle(`${args.commit.message}`) // COMMIT MESSAGE
	.setURL(`${args.html_url}`) // URL OF COMMIT
	.setAuthor(`NEW COMMIT! 🏳️‍🌈\n By ${args.commit.author.name} `,`${args.author.avatar_url}`,`${args.author.html_url}`)
	.setThumbnail(`${args.author.avatar_url}`) // avatar url
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: `\nCommited By : ${args.commit.author.name}`, value: `Commit Hash: ${args.sha}` },
		{ name:`📅  ${args.commit.author.date.substr(0,10)}`,value:`⌚ ${args.commit.author.date.slice(11,19)}`}
		
		
	)
	

  message.channel.send(exampleEmbed);

  },
};
