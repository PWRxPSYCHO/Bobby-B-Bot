const Discord = require('discord.js');
const token = require('../BobbyBBot/auth.json');
const trigger = 'bobby';

const quotes = [
    'You heard the Hand, the king\'s too fat for his armor! Go find the breastplate stretcher! NOW!',
    'I swear to you, I was never so alive as when I was winning this throne, or so dead as now that I\'ve won it',
    'A DOTHRAKI HOOORDE, NED, ON AN OPEN FIELD!',
    'You want to know the horrible truth? I can\'t even remember what she looked like. I only know she was the one thing I ever wanted...someone took her away from me, and seven kingdoms couldn\'t fill the hole she left behind.',
    'Wear it in silence or I\'ll honor you again',
    'I\'m not trying to honor you, I\'m trying to get you to run my kingdom while I eat, drink, and whore my way to an early grave.',
    'Gods I was strong then',
    'Your mother was a dumb whore with a fat arse, did you know that'
];

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready');
});

client.on('message', message => {
    if(message.content.toLowerCase().includes(trigger)){
        message.channel.send(quotes[Math.floor(Math.random() * quotes.length) + 1]);
    }
});

client.login(token.token);