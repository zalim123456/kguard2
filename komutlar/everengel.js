const db = require('quick.db');
const Discord = require('discord.js')

exports.run = (client, message, args, func) => {


  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  
  if(!args[0]) return message.channel.send("Doğru kullanım `!everyone-here-engel aç/kapat`")
      if(args[0] === "aç"){
        if(db.has(`everhere_${message.guild.id}`)) return message.channel.send("Zaten açık")
    db.set(`everhere_${message.guild.id}`, 'acik')
    message.channel.send(`Everyone here engel başarıyla açıldı`)
   }
    if(args[0] === "kapat") {
              if(!db.has(`everhere_${message.guild.id}`)) return message.channel.send("Zaten kapalı")

    {db.delete(`everhere_${message.guild.id}`)
    message.channel.send('Everyone here engel başarıyla kapatıldı.')   }
     }
 
  
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'everyone-here-engel',
    description: 'FİBER BOTLİST & CODE',
    usage: 'prefix <prefix>'
};