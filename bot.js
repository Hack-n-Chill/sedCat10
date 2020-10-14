require('dotenv').config();
const index=require('./index')
const prefix=';'

const fetch = require("node-fetch");
console.log(process.env.token)

const{Client}=require('discord.js')
const client=new Client()
client.login(process.env.token)

let REPO_API
client.on('message',(message)=>
{
    if(message.author.bot===false)
    {
        if(message.content.startsWith(prefix))
        {
           
          
            const [CMD_NAME,...args]=message.content.trim().substring(prefix.length).split(/\s+/)
            if(CMD_NAME==="track"){
            REPO_API=index.repo_generator(args[0])
            message.channel.send(REPO_API)
            
            }
            else
            {
                switch(CMD_NAME)
                {
                    case "commit":
                        message.channel.send("COMMIT")
                        message.channel.send(REPO_API)
                      
                        index.getData(REPO_API).then(data=>
                            {
                                message.channel.send((data.commits.url).toString())
                                index.getData(data.commits_url).then((array)=>
                                array.forEach(message.channel.send(array.node_id)))
                            })
                }
            }
        }
    }
})



