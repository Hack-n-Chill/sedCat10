const Discord = require("discord.js");
require("dotenv").config();
const fs = require("fs");
const logActivity = require("debug")("Log Activity");

const token = process.env.token;
const client = new Discord.Client();

client.once("ready", () => {
  logActivity("Bot Now Online!");
});

//New Colection for dyanimacally storing commands
client.commands = new Discord.Collection();
const prefix = ";";

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(token);
