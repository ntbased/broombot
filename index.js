const Discord = require('discord.js');
 const client = new Discord.Client();
 require('log-timestamp');
 const axios = require('axios').default;
 const { token } = require('./token.json')


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.channels.cache.get('739675073803452446').send('Bot is now online')
 client.channels.cache.get('739675073803452446').send('broombot is in ' + client.guilds.cache.size + ' servers')
 });

client.on('message', async msg => {
  if (msg.content === 'broom') {
  //  if (msg.author.bot === false) {
      client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested broom")
  msg.channel.send('i am broom');
  //}
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
 }
 if (msg.content === 'bserver') {

client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bserver")
  }

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
if (msg.author  != "445438011765686273") {
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
  //  client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bhelp")
    //msg.channel.send("Avaliable triggers: broombot, broom, *scary*, number, poop, *damn*, *wtf*");
  //  msg.channel.send("Italicized triggers will only sometimes trigger")
    msg.channel.send("Avaliable commands: bspanishify, bping, becho, bnumber, bserver, bair, bspampingme");


 }

 if(msg.content === "bspampingme") {
   console.log(msg.author.tag + " requested bspamntbased")
   client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bspamntbased")
   var count = 4
         msg.channel.send("ok")

         for (i = 0; i < count; i++) {
           client.channels.cache.get('711793617529995297').send("<@" + msg.author + ">")
         }
     }


     if(msg.content === "bspamchop0server") {
       console.log(msg.author.tag + " requested bspamntbased")
       client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bspamntbased")
       var count = 10
             msg.channel.send("ok")

             for (i = 0; i < count; i++) {
               client.channels.cache.get('738611844851171356').send("broom")
             }
         }

 if (msg.content.startsWith("bair")) {
   if (msg.author.bot === false) {
   console.log(msg.author.tag + " requested bair")
   client.channels.cache.get('739675073803452446').send(msg.author.tag + " requested bair")
   axios.get('https://www.purpleair.com/json?show=20115').then(function (response) {

    var epic = response.data.results[0].Stats.substring(12, 24)

    console.log(epic)

    var epic1 = epic.substring(epic.lastIndexOf(":") + 1, epic.lastIndexOf(","));

    console.log(epic1)

var freedomtemp = response.data.results[0].temp_f
var communismtemp = Math.round((freedomtemp-32)*5/9)

var aqi = aqiFromPM(epic1)
  //   msg.channel.send("Current AQI: " + aqi)
  //   msg.channel.send("Current temperature (F): " + response.data.results[0].temp_f)


     const exampleEmbed = new Discord.MessageEmbed()

     .setTitle(aqi + " - " + getAQIDescription(aqi))
       .setColor(color)

       .setDescription("Temp: " + freedomtemp + "°F/" + communismtemp + "°C - Humidity: " + response.data.results[0].humidity + "%\n\n" + getAQIMessage(aqi) + '\n[Click to see map](https://www.purpleair.com/map?opt=1/i/mAQI/a10/cC0&select=20115#11.87/37.40623/-122.12782)')
       .setThumbnail(cloudurl)
       .addFields(

     //		{name: '\u200b', value: '[Click to see map](https://www.purpleair.com/map?opt=1/i/mAQI/a10/cC0#11.4/37.4131/-122.1283)'}
       )
       .setFooter('Requested by ' + msg.author.tag)
       .setTimestamp()

     msg.channel.send(exampleEmbed);
   }).catch(function (error) {
       console.log(error);
   });
}}

});

function aqiFromPM(pm) {

      if (isNaN(pm)) return "-";
      if (pm == undefined) return "-";
      if (pm < 0) return pm;
      if (pm > 1000) return "-";
        /*
              Good                              0 - 50         0.0 - 15.0         0.0 – 12.0
        Moderate                        51 - 100           >15.0 - 40        12.1 – 35.4
        Unhealthy for Sensitive Groups   101 – 150     >40 – 65          35.5 – 55.4
        Unhealthy                                 151 – 200         > 65 – 150       55.5 – 150.4
        Very Unhealthy                    201 – 300 > 150 – 250     150.5 – 250.4
        Hazardous                                 301 – 400         > 250 – 350     250.5 – 350.4
        Hazardous                                 401 – 500         > 350 – 500     350.5 – 500
        */
        if (pm > 350.5) {
          return calcAQI(pm, 500, 401, 500, 350.5);
        } else if (pm > 250.5) {
          return calcAQI(pm, 400, 301, 350.4, 250.5);
        } else if (pm > 150.5) {
          return calcAQI(pm, 300, 201, 250.4, 150.5);
        } else if (pm > 55.5) {
          return calcAQI(pm, 200, 151, 150.4, 55.5);
        } else if (pm > 35.5) {
          return calcAQI(pm, 150, 101, 55.4, 35.5);
        } else if (pm > 12.1) {
          return calcAQI(pm, 100, 51, 35.4, 12.1);
        } else if (pm >= 0) {
          return calcAQI(pm, 50, 0, 12, 0);
        } else {
          return undefined;
        }

      }
      function bplFromPM(pm) {
      if (isNaN(pm)) return 0;
      if (pm == undefined) return 0;
      if (pm < 0) return 0;
        /*
              Good                              0 - 50         0.0 - 15.0         0.0 – 12.0
        Moderate                        51 - 100           >15.0 - 40        12.1 – 35.4
        Unhealthy for Sensitive Groups   101 – 150     >40 – 65          35.5 – 55.4
        Unhealthy                                 151 – 200         > 65 – 150       55.5 – 150.4
        Very Unhealthy                    201 – 300 > 150 – 250     150.5 – 250.4
        Hazardous                                 301 – 400         > 250 – 350     250.5 – 350.4
        Hazardous                                 401 – 500         > 350 – 500     350.5 – 500
        */
        if (pm > 350.5) {
        return 401;
        } else if (pm > 250.5) {
        return 301;
        } else if (pm > 150.5) {
        return 201;
        } else if (pm > 55.5) {
        return 151;
        } else if (pm > 35.5) {
        return 101;
        } else if (pm > 12.1) {
        return 51;
        } else if (pm >= 0) {
        return 0;
        } else {
        return 0;
        }

      }
      function bphFromPM(pm) {
      //return 0;
      if (isNaN(pm)) return 0;
      if (pm == undefined) return 0;
      if (pm < 0) return 0;
        /*
              Good                              0 - 50         0.0 - 15.0         0.0 – 12.0
        Moderate                        51 - 100           >15.0 - 40        12.1 – 35.4
        Unhealthy for Sensitive Groups   101 – 150     >40 – 65          35.5 – 55.4
        Unhealthy                                 151 – 200         > 65 – 150       55.5 – 150.4
        Very Unhealthy                    201 – 300 > 150 – 250     150.5 – 250.4
        Hazardous                                 301 – 400         > 250 – 350     250.5 – 350.4
        Hazardous                                 401 – 500         > 350 – 500     350.5 – 500
        */
        if (pm > 350.5) {
        return 500;
        } else if (pm > 250.5) {
        return 500;
        } else if (pm > 150.5) {
        return 300;
        } else if (pm > 55.5) {
        return 200;
        } else if (pm > 35.5) {
        return 150;
        } else if (pm > 12.1) {
        return 100;
        } else if (pm >= 0) {
        return 50;
        } else {
        return 0;
        }

      }

      function calcAQI(Cp, Ih, Il, BPh, BPl) {

        var a = (Ih - Il);
        var b = (BPh - BPl);
        var c = (Cp - BPl);
        return Math.round((a/b) * c + Il);

      }

var color;
var cloudurl;
      function getAQIDescription(aqi) {
        if (aqi >= 401) {
          color = '#731425'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401527804362822/731425.png'
          return 'Hazardous';
        } else if (aqi >= 301) {
          color = '#731425'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401527804362822/731425.png'
          return 'Hazardous';
        } else if (aqi >= 251) {
          color = '#721354'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401528693555251/721354.png'
          return 'Very Unhealthy';
        } else if (aqi >= 201) {
          color = '#8C1A4B'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401529767165992/8C1A4B.png'
          return 'Very Unhealthy';
        } else if (aqi >= 175) {
          color = '#bb2738'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401531130183760/bb2738.png'
          return 'Unhealthy';
        } else if (aqi >= 151) {
          color = '#EA3324'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401532157788240/EA3324.png'
          return 'Unhealthy';
        } else if (aqi >= 125) {
          color = 'ff6600'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753402089685647490/ff6600.png'
          return 'Unhealthy for Sensitive Groups';
        } else if (aqi >= 101) {
          color = '#EF8533'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401500168093796/EF8533.png'
          return 'Unhealthy for Sensitive Groups';
        } else if (aqi >= 75) {
          color = '#ffd400'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401505939324958/ffd400.png'
          return 'Moderate';
        } else if (aqi >= 51) {
          color = '#FFFF55'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401510339018782/FFFF55.png'
          return 'Moderate';
        } else if (aqi >= 25) {
          color = '#d7fc1e'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401523488292920/d7fc1e.png'
          return 'Good';
        } else if (aqi >= 0) {
          color = '#26f207'
          cloudurl = 'https://cdn.discordapp.com/attachments/753401463572791296/753401526625632286/26f207.png'
          return 'Good';
        } else {
          return undefined;
        }
      }

      function getAQIMessage(aqi) {
        if (aqi >= 401) {
          return '>401: Health alert: everyone may experience more serious health effects';
        } else if (aqi >= 301) {
          return '301-400: Health alert: everyone may experience more serious health effects';
        } else if (aqi >= 201) {
          return '201-300: Health warnings of emergency conditions. The entire population is more likely to be affected. ';
        } else if (aqi >= 151) {
          return '151-200: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.';
        } else if (aqi >= 101) {
          return '101-150: Members of sensitive groups may experience health effects. The general public is not likely to be affected.';
        } else if (aqi >= 51) {
          return '51-100: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.';
        } else if (aqi >= 0) {
          return '0-50: Air quality is considered satisfactory, and air pollution poses little or no risk';
        } else {
          return undefined;
        }
     }




client.login(token);
