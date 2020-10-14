require('dotenv').config();
const index=require('./index')
const prefix=';'

const fetch = require("node-fetch");
console.log(process.env.token)

const{Client}=require('discord.js')
const client=new Client()
client.login(process.env.token)

var REPO_API;
client.on('message',(message)=>
{
    if(message.author.bot===false)
    {
        if(message.content.startsWith(prefix))
        {
          
            const [CMD_NAME,...args]=message.content.trim().substring(prefix.length).split(/\s+/)
            if(CMD_NAME==="track"){
            REPO_API=index.repo_generator(args[0])
          }
            else
            {
                switch(CMD_NAME)
                {
                    case "commit":
                    
                        index.getData(`${REPO_API}/commits`).then(data=>
                            {
                                
                                Array.from(data).forEach(arr=>{
                                    message.channel.send(`${arr.commit.author.name} committed a change ${arr.commit.message}`)
                                    message.channel.send(`${arr.html_url}`)})
                            }).catch(err=>message.channel.send("Error"))
                            break;
                      
                    

                    case "owner":
                        
                        index.getData(`${REPO_API}`).then(data=>
                            {
                                
                                message.channel.send(`${data.owner.login}`)
                            }).catch(err=>
                                {
                                    message.channel.send("Invalid ID")
                                })


            

                }
            }
        }
    }
})



