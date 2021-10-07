var Discord = require('discord.js')

module.exports = {

    name : 'UserInfo',
    description : 'Userinfo.....',

    
    execute (message,msg){
    const user = message.mentions.users.first() || message.author ;
    const embed = new Discord.MessageEmbed()
        .setTitle("User Information")
        .setDescription("Displays UserInfo")
        .setColor(0x33ECFF)
        .addField('Username' , user.username)
        .addField('Account Created At', user.createdAt.toLocaleDateString())
        .setThumbnail(user.displayAvatarURL())
        .setFooter('Created By AlekDevs')
        .setTimestamp()

    message.channel.send(embed)


    }
    
}
