var Discord = require('discord.js')
var rbxbot = require('noblox.js')
var config = require('../config.json')
module.exports = {

    name : 'GroupShout',
    description : '.....',

    
async execute(message,msg,args) {

    if(!message.member.hasPermission('ADMINISTRATOR'))return message.reply("You Don't Have Permission To Use This")  

    const shoutmsg = message.content.slice('!shout '.length)
    if(!shoutmsg)return message.reply('Please Provide A Message To Shout!')

    rbxbot.shout({ group : config.GroupID, message : shoutmsg })
    .then(()=> {
        message.reply('Done!')
    })
    .catch((err) => {
        message.reply(err.message)
    })
    
}
    
}
