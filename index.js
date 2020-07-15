const Discord = require('discord.js');
 const client = new Discord.Client();
 const { token } = require('./token.json')

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', async msg => {
  if (msg.content === 'broom') {
    if (msg.author.bot === false) {
  msg.channel.send('i am broom');
  }
 }
  /*
 if (msg.content === 'broombot') {
   if (msg.author.bot === false) {
 msg.channel.send('i am broom');
}
 }

 if (msg.content === 'i am broom') {
   msg.channel.messages.fetch({ limit: 1 }).then(messages => {
   const firstMessage = messages.last()
   if (firstMessage.author.id != client.user.id) {
     if (msg.author.bot === false) {
 msg.channel.send('no, i am broom');
}
}
})}

if (msg.content === 'no, i am broom') {
  msg.channel.messages.fetch({ limit: 1 }).then(messages => {
  const firstMessage = messages.last()
  if (firstMessage.author.id != client.user.id) {
msg.channel.send('broom');
}
})}
*/


 if (msg.content.includes('scary')) {
   const scaryList = ["alarming", "chilling", "creepy", "eerie", "hairy", "horrifying", "intimidating", "shocking", "spooky", "bloodcurdling", "hair-raising", "horrendous", "spine-chilling", "bone-chilling", "unnverving", "frightening", "terrifying", "you're scary"]
   if (msg.author.bot === false) {
  if (Math.floor(Math.random()*10) < 1) {
    //  msg.channel.send(scaryList[Math.floor(Math.random() * scaryList.length)]);
      msg.channel.send(msg.content.replace(/scary/gi, scaryList[Math.floor(Math.random() * scaryList.length)]))
   }
}
 }
if (msg.content === 'bserver') {
  const { Client, PacketWriter, State } = require("mcproto")

const host = "gunnmc.softether.net", port = 42015

const client = await Client.connect(host, port)

client.send(new PacketWriter(0x0).writeVarInt(404)
    .writeString(host).writeUInt16(port)
    .writeVarInt(State.Status))

client.send(new PacketWriter(0x0))

const response = await client.nextPacket(0x0)
//console.log(response.readJSON())

const { players: { online, max, sample = [] } } = response.readJSON()

let names = sample.map(v => v.name)

var namescorrected = names.join(', ')
/*
for (i = 0; i < names.length; i++) {
  namescorrected = names[i]
}
namescorrected.replace(",", ", ")
*/
msg.channel.send(online + "/" + max + " on GunnMC: " + namescorrected)

client.end()
}


 if (msg.content === 'bnumber') {
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

if(msg.content === "bping") {
        msg.channel.send("lol wait").then(m => m.edit("you have " + Math.floor(Math.random() * (300 - 150 + 1) + 150) + " ping")); //the real way doesn't work for some reason so i just generate a random number
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

if (msg.content.startsWith("becho")) {
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
  if (msg.mentions.has(client.user) && msg.content.includes("help")) {
    msg.channel.send("Avaliable triggers: broombot, broom, *scary*, number, poop, *damn*, *wtf*");
    msg.channel.send("Italicized triggers will only sometimes trigger")
    msg.channel.send("Avaliable commands: bspanishify, bping, becho, bnumber, bserver");


 }

 });

client.login(token);
