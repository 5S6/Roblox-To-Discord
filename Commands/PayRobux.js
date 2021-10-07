var Discord = require('discord.js')
var rbxbot = require('noblox.js')
var config = require('../config.json')
module.exports = {

    name : 'PayRobux',
    description : 'To Payout Robux To A User',

    
async execute(message,msg,args) {

    if(!message.member.hasPermission('ADMINISTRATOR'))return message.reply("You Don't Have Permission To Use This")  
    const robloxname = args[1]
    const robux = Number.parseInt(args[2])
    if(Number.isNaN(robux))return message.reply("Please Provide A Valid Ammount Of Robux To Pay")
    
    await rbxbot.getIdFromUsername(robloxname)
    .then((robloxid) => {

    rbxbot.groupPayout({ group : config.GroupID , member : robloxid, amount: robux })
    .then(() => {
        message.reply(`Succesfully Paid ${robux} Robux To ${robloxname}`)
        })
        .catch((err) => {
            console.log(err)
            message.reply(err.message)
        })

    })
    .catch((err) => {
        message.reply(err.message)
        console.log(err)
    })

}

}
