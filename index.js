const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Bot Started.');
});

client.login(token);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'args') {
		if (!args.length) {
			return message.channel.send(`Error, ${message.author}`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}
});