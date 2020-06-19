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
   const scaryList = ["alarming", "chilling", "creepy", "eerie", "hairy", "horrifying", "intimidating", "shocking", "spooky", "bloodcurdling", "hair-raising", "horrendous", "spine-chilling", "bone-chilling", "unnverving", "frightening", "terrifying", "you're scary"]
   if (msg.author.bot === false) {
  if (Math.floor(Math.random()*10) < 1) {
    //  msg.channel.send(scaryList[Math.floor(Math.random() * scaryList.length)]);
      msg.channel.send(msg.content.replace(/scary/gi, scaryList[Math.floor(Math.random() * scaryList.length)]))
   }
}
 }

 if (msg.content === 'number') {
   msg.channel.send(Math.floor(Math.random()*10));
 }
 if (msg.content.includes('poop')) {
   msg.react("💩");
 }

 if (msg.content.includes('damn') || msg.content.includes('wtf') === true) {
      if (msg.author.bot === false) {
   if (Math.floor(Math.random()*10) < 3) {
     var temp = msg.content.replace(/damn/gi, "I'm frustrated");
     var newtemp = temp.replace(/wtf/gi, "I don't understand")
   msg.channel.send(newtemp);
 }
}
}

if(msg.content === "ping") {
        msg.channel.send("lol wait").then(m => m.edit("you have ping"));
    }

// if (msg.content.includes('wtf')) {
//      if (msg.author.bot === false) {
//   if (Math.floor(Math.random()*10) < 2) {
//   msg.channel.send(msg.content.replace(/wtf/gi, "I don't understand"));
 //}
//}
//}
if (msg.content.startsWith("spanishify")) {
     if (msg.author.bot === false) {
    	var msgsplit = msg.content.split(" ");
      var combined = ""
      for (i = 1; i < msgsplit.length; i++) {
        combined = combined + " " + msgsplit[i] + "o"
    }
    if (combined.length != 0) {
    msg.channel.send(combined);

} else {

  msg.channel.messages.fetch({ limit: 2 }).then(messages => {
  const firstMessage = messages.last()
  if (firstMessage) {
    if (firstMessage.author.id != client.user.id) {
     var msgsplit = firstMessage.content.split(" ");
     var combined = ""
     for (i = 0; i < msgsplit.length; i++) {
       combined = combined + " " + msgsplit[i] + "o"
     }
     msg.channel.send(combined);
   }
  } else {
    msg.channel.send("oof");
  }
  })
}
  }
}

if (msg.content.startsWith("echo")) {
msg.channel.messages.fetch({ limit: 2 }).then(messages => {
const firstMessage = messages.last()
if (firstMessage) {
  msg.channel.send(firstMessage.content);
} else {
  msg.channel.send("oof");
}
})}


if (msg.content.startsWith("japanify")) {
     if (msg.author.bot === false) {
    	var msgsplit = msg.content.split(" ");
      var combined = ""
      for (i = 1; i < msgsplit.length; i++) {
        combined = combined + " " + msgsplit[i] + "u"

    }
  //


    msg.channel.send(combined);

  //} else msg.channel.send("no message!");
}
}
  if (msg.mentions.has(client.user)) {
    msg.channel.send("Avaliable triggers: broombot, broom, *scary*, number, poop, *damn*, *wtf*");
    msg.channel.send("Italicized triggers will only sometimes trigger")
    msg.channel.send("Avaliable commands: spanishify");


 }

 });

client.login(token);
