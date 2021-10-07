var Discord = require('discord.js') 
var rbxbot = require('noblox.js')
var config = require('../config.json')
module.exports = {

    name : 'Rank',
    description : '.....',

    
async execute(message,msg,args) {

      const robloxname = args[1]
      const robloxid = await rbxbot.getIdFromUsername(robloxname)
      .then (async (robloxid) => {

        const rank = parseInt(args[2])

        await rbxbot.setRank({ group: config.GroupID, target: robloxid, rank : rank })
        .then(async () => {
          const rankname = await rbxbot.getRankNameInGroup(config.GroupID, robloxid)
          message.reply(`Succesfully Ranked **${robloxname}** to \n (${rankname})  `)
        })
        .catch((err) => {
          message.reply('Could Not Rank User')
          console.log(err)
        })
      })
    }
  }
