const Discord = require('discord.js');
const conf = require('../conf.json')
var prefix = conf.prefix;
var room = conf.commandroom;
exports.run = function(client, message) {

if (message.channel.id != room) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Uả lệnh j lạ dzi')
	message.channel.send(embed1);
	return;
  }
  
console.log('Sử dụng lệnh HỖ TRỢ ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('susbot')
.setTimestamp()
.setDescription("**TRỢ GIÚP** \n  \n `Aegis ⊳ ;aegis ip port (1.8-1.13.2)  \nBotNet ⊳ ;botnet ip port protocol  \nBotter ⊳ ;botjoiner ip port protocol  \nNullPing (1.8) ⊳ ;nullping ip port protocol  \nMultikiller ⊳ ;multikiller ip port protocol  \nLocalHost ⊳ ;localhost ip port protocol  \nUltimateSmasher ⊳ ;ultimatesmasher ip port protocol  \nServerFuck ⊳ ;serverfuck ip port protocol  \nNettyDowner ⊳ ;nettydowner ip port protocol  \nRam ⊳ ;ram ip port protocol  \nJoin ⊳ ;join ip port protocol  \nLegitJoin ⊳ ;legitjoin ip port protocol  \nColorCrasher ⊳ ;colorcrasher ip port protocol  \nQueue ⊳ ;queue ip port protocol  \nYooniksCry ⊳ ;yoonikscry ip port protocol  \nSpoof ⊳ ;spoof ip port protocol  \nRandomBytes ⊳ ;randombytes ip port protocol  \nInvalidNames ⊳ ;invalidnames ip port protocol  \nBigPacket ⊳ ;bigpacket ip port protocol  \nNabCry ⊳ ;nabcry ip port protocol  \nNetWork ⊳ ;network ip port protocol  \nSpamJoin ⊳ ;spamjoin ip port protocol  \nPlayerPacket ⊳ ;playerpacket ip port protocol  \nGaySpam ⊳ ;gayspam ip port protocol  \nTcpShit ⊳ ;tcphit ip port protocol  \nTcpBypass ⊳ ;tcpbypass ip port protocol  \nExtremeJoin ⊳ ;extremejoin ip port protocol  \nHandshake ⊳ ;handshake ip port protocol  \nLongNames ⊳ ;longnames ip port protocol  \nDoubleJoin ⊳ ;doublejoin ip port protocol  \nLegitNameJoin ⊳ ;legitnamejoin ip port protocol  \nLegacyPing ⊳ ;legacyping ip port protocol  \nCập Nhật Proxy ⊳ ;proxy \nDừng cuc tấn công ⊳ ;stop`")
.setFooter('© Nhà phát triển MINIFLEX.', client.user.avatarURL)
.setTimestamp()
.setThumbnail()
message.channel.send(embed)
};



exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'],
  permLevel: 0 
};

exports.help = {
  name: 'help',
  description: 'Tüm methods komutları gösterir.',
  usage: 'help'
};
