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
    'Your mother was a dumb whore with a fat arse, did you know that',
    'You\'ve got fat.',
    'You helped me win the Iron Throne, now help me keep the damn thing. We were meant to rule together.',
    'Surrounded by Lannisters, everytime I close my eyes, I see their blond hair and their smug satisfied faces',
    'You let that little girl disarm you?',
    'Do you think it\'s honor that\'s keeping the peace? It\'s fear, fear and blood',
    'Who named you? Some halfwit with a Slutter?',
    'She must have been a rare wench to make Lord Eddark Stark forgets his honor.',
    'I never loved my brothers. A sad thing for a man to admit, but it\'s true. You were the brother I chose',
    'Stop this madness in the name of your King!',
    'I thought being King meant I could do whatever I wanted ',
    'You were right, Varys, Littlefinger, my brother... Worthless. No one to tell me "No" but you. Only you ',
    'How long can hate hold things together? ',
    'That\'s all what the realm is now. Backstabbing and scheming and arse-licking and money-grubbing',
    'I don\'t know what happened between you and those yellow-haired shits. I don\'t want to know! ',
    'My memory... King Robert Baratheon murdered by a pig ',
    'You\'re too hard on yourself, you always have been.',
    'There is a war coming Ned. I don\'t know when, I don\'t know who we\'ll be fighting, but it\'s coming ',
    'You remember me at 16? All I wanted to do was crack skulls ',
    'It\'s a neat little trick you do, you move your lips and your father\'s voice comes out ',
    'I\'ll kill every Targaryen I get my hands on. ',
    'That\'s your wise advise? Do nothing till our enemies are on our shoes? ',
    'Take me to your crypt, I want to pay my respects.',
    'I need you Ned, down at Kings Landing, not up here where you\'re no damn use to anybody. ',
    'In my dreams, I kill him everynight.',
    'We never had the chances to be young ',
    'It\'s a great crime to lie to a King. ',
    'I should not have hit her. That was not kingly ',
    'Fat? Fat, is it? Is that how you speak to your king? Ah, damn you, Ned, why are you always right?'
];

const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready');
});

client.on('message', message => {
    if (message.content.toLowerCase().includes(trigger)) {
        message.channel.send(quotes[Math.floor(Math.random() * quotes.length) + 1]);
    }
});

client.login(token.token);
