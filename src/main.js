const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const logActivity = require("debug")("Log Activity");

const token = process.env.token;

client.once("ready", () => {
  logActivity("Bot Now Online!");
});

client.on("message", (msg) => {
  if (msg.content === ";ping") {
    msg.channel.send("Pong.");
  }
});

client.login(token);
