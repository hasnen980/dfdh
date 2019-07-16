const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", (599368245732179974) => {
let channel =     client.channels.get("")
setInterval(function() {
channel.send(`hi hi hi hi hi hi hi hi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);