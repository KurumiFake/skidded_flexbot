const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
const conf = require('../conf.json');
var room = conf.commandroom;
if (message.channel.id != room) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Uả lệnh j lạ dzi')
	message.channel.send(embed1);
	return;
  }
var exec = require('child_process').exec
exec(`killall java`, (error, stdout, stderr) => {
});
console.log('stopped all attacks:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('susbot')
	.setTimestamp()
	.setDescription("**► TẤT CẢ CUỘC TẤN CÔNG ĐÃ DỪNG LẠI! 💥**")
	.setFooter('© Nhà phát triển MINIFLEX.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail()
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stop'],
  permLevel: 0
}

exports.help = {
  name: 'stop',
  description: 'Özel',
  usage: 'stop'
}
