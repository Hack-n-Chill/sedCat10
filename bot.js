require('dotenv').config();

const data_from_api=require('./data_from_api')
const prefix=';'

const index=require('./index')


const fetch = require("node-fetch");
console.log(process.env.token)

const{Client}=require('discord.js')
const client=new Client()
client.login(process.env.token)
const ping=require('./ping')



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
                                
                                ping.execute(message,data[0])

                                 
                            }).catch(err=>{message.channel.send("Invalid Repo Link")
                                            console.log(err)
                        })
                            break;


                      
                    
                    case "owner":
                        
                        index.getData(`${REPO_API}`).then(data=>
                            {
                                
                                message.channel.send(`${data.owner.login}`)
                            }).catch(err=>
                                {
                                    message.channel.send("Invalid ID")
                                })
                        break;


                }
            }
        }
    }
})



