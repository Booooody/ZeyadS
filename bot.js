const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});











const developers = ["526865414303645698","348530664108195851",""]
const adminprefix = ".";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send(`**Now Playig   ${argresult} :white_check_mark: '**`)
  } else 
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Now Watching   ${argresult} :white_check_mark: '**`)
  } else 
  if (message.content.startsWith(adminprefix + 'li')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Now Listening   ${argresult} :white_check_mark: '**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/vult");
      message.channel.send(`**Now Streaming   ${argresult} :white_check_mark: '**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult} :white_check_mark: '** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client.on('message',async message => {
if(message.content === `${prefix}lv`) {
client.destroy();
}
});
client.login(process.env.BOT_TOKEN);
