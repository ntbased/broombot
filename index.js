const Discord = require('discord.js');
 const client = new Discord.Client();
 require('log-timestamp');
 const { token } = require('./token.json')


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.channels.cache.get('739675073803452446').send('Bot is now online')
 client.channels.cache.get('739675073803452446').send('broombot is in ' + client.guilds.cache.size + ' servers')
 });

client.on('message', async msg => {
  if (msg.content === 'broom') {
    if (msg.author.bot === false) {
      client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested broom")
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
      console.log(msg.author.tag + " requested scary")
      client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested scary")
   }

}
 }if (msg.content === 'bserver') {

client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bserver") }

if (msg.content === 'bserver') {
  console.log(msg.author.tag + " requested bserver")


  const { Client, PacketWriter, State } = require("mcproto")

const host = "localhost", port = 25672

try {
const client = await Client.connect(host, port)
}

catch(err) {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('GunnMC Server Status')
    .setDescription("Oof")
    .setThumbnail('https://i.imgur.com/gpHLVnT.png')
    .addFields(
  		{name: 'Players:', value: "The server is offline" }
    )
    .setFooter('Requested by ' + msg.author.tag)
    .setTimestamp()

  msg.channel.send(exampleEmbed);

  client.end()
}
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

if (namescorrected === "") {
  namescorrected = "No one is online"
}

const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#26f207')
  .setTitle('GunnMC Server Status')
  .setDescription(online + "/" + max + " on `gunnmc.tk:25672`")
  .setThumbnail('https://i.imgur.com/gpHLVnT.png')
  .addFields(
		{name: 'Players:', value: namescorrected }
  )
  .setFooter('Requested by ' + msg.author.tag)
  .setTimestamp()

msg.channel.send(exampleEmbed);

client.end()
}


 if (msg.content === 'bnumber') {
   console.log(msg.author.tag + " requested bnumber")
   client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bnumber")

   msg.channel.send(Math.floor(Math.random()*10));
 }
 if (msg.content.includes('poop')) {
   console.log(msg.author.tag + " requested poop")

   msg.react("💩");
 }

 if (msg.content.includes('damn') || msg.content.includes('wtf') === true) {

      if (msg.author.bot === false) {
   if (Math.floor(Math.random()*10) < 3) {
     var temp = msg.content.replace(/damn/gi, "I'm frustrated");
     var newtemp = temp.replace(/wtf/gi, "I don't understand")
   msg.channel.send(newtemp);
   console.log(msg.author.tag + " requested damn/wtf")
   client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested damn/wtf")
 }
}
}

if(msg.content === "bping") {
  console.log(msg.author.tag + " requested bping")
  client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bping")
        msg.channel.send("lol wait").then(m => m.edit("you have " + Math.floor(Math.random() * (300 - 150 + 1) + 150) + " ping")); //the real way doesn't work for some reason so i just generate a random number
    }

// if (msg.content.includes('wtf')) {
//      if (msg.author.bot === false) {
//   if (Math.floor(Math.random()*10) < 2) {
//   msg.channel.send(msg.content.replace(/wtf/gi, "I don't understand"));
 //}
//}
//}
if (msg.content.startsWith("bspanishify")) {
  console.log(msg.author.tag + " requested bspanishify")
  client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bspanishify")
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
  if (msg.author.bot === false) {
  if (msg.channel.id != "710932856809193497") {
msg.channel.messages.fetch({ limit: 2 }).then(messages => {
const firstMessage = messages.last()

  msg.channel.send(firstMessage.content).catch(err => { msg.channel.send("no");});
  console.log(msg.author.tag + " requested becho with message: " + firstMessage.content)
  client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested becho with message: " + firstMessage.content)

})}}}


if (msg.content.startsWith("bjapanify")) {
  console.log(msg.author.tag + " requested bjapanify")
  client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bjapanify")
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
  if ((msg.mentions.has(client.user) || msg.content === "bhelp")) {
    console.log(msg.author.tag + " requested bhelp")
    client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bhelp")
    //msg.channel.send("Avaliable triggers: broombot, broom, *scary*, number, poop, *damn*, *wtf*");
  //  msg.channel.send("Italicized triggers will only sometimes trigger")
    msg.channel.send("Avaliable commands: bspanishify, bping, becho, bnumber, bserver");


 }

 });

client.login(token);
