const Discord = require('discord.js');
require('dotenv').config();

const webhook = new Discord.WebhookClient({
  id: process.env.DISCORD_CHAT_ID,
  token: process.env.DISCORD_SERVER_TOKEN
});

webhook.send('Hi there cutie')