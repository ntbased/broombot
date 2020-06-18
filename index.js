const Discord = require('discord.js');
 const client = new Discord.Client();
 const { token } = require('./token.json')

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'broombot') {
 msg.channel.send('i am broom');
 }
 if (msg.content === 'broom') {
 msg.channel.send('i am broom');
 }
 if (msg.content.includes('scary')) {
   if (msg.author.bot === false) {
   if (Math.floor(Math.random()*10) < 2) {
      msg.channel.send('youre scary');
   }
}
 }

 if (msg.content === 'number') {
   msg.channel.send(Math.floor(Math.random()*10));
   msg.react("💩");
 }
 if (msg.content === 'poop') {
   msg.react("💩");
 }

 if (msg.content.includes('damn')) {
   if (Math.floor(Math.random()*10) < 2) {
   msg.channel.send("<@" + msg.author.id + ">" + " says: " + msg.content.replace("damn", "I'm frustrated"));
 }
}

 if (msg.content.includes('wtf')) {
   if (Math.floor(Math.random()*10) < 2) {
   msg.channel.send("<@" + msg.author.id + ">" + " says: " + msg.content.replace("wtf", "I don't understand"));
 }
}
if (msg.content.startsWith("spanishify")) {
    	var msgsplit = msg.content.split(" ");
      var combined = ""
      for (i = 1; i < msgsplit.length; i++) {
        combined = combined + " " + msgsplit[i] + "o"

    }
    msg.channel.send(combined);
  }

 });

client.login(token);
