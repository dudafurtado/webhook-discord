const Discord = require('discord.js');
const readlineSync = require('readline-sync');
require('dotenv').config();

const id = process.env.DISCORD_CHAT_ID;
const token = process.env.DISCORD_SERVER_TOKEN;

const answer = readlineSync.question('How have you been? ');

const webhook = new Discord.WebhookClient({
  url: `https://discord.com/api/webhooks/${id}/${token}`
});

webhook.send(answer);