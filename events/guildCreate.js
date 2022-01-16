const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('../conf.json');

var prefix = conf.prefix;

const girismesaj = [
  '**Bot Added to Server',
  '**McDeath Bot** provides convenience to people on your server',
  'Bot Has All Kinds of Commands'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
