require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "company.";

client.on('ready', () => {
    console.log(`${client.user.tag} is ingelogd.`);
});

client.on('message', (message) => {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
    }
});

client.on('message', (message) => {
    if (message.content === 'hallo') {
        message.react('👋');
    }
})

client.login(process.env.BOT_TOKEN)

