module.exports = {
	name: 'args-info',
	description: 'Info about the arguments',
	args: true,
	execute(message, args) {
		if(!args.length) {
			return message.channel.send(`You have not provided any arguments, ${message.author}`);
		}
	},
};