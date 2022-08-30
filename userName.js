"use strict";
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const list = client.guilds.cache.get("959363007106924565");

console.log(client.users.cache.get(), "hello");
console.log(list);
// list.members.cache.forEach((member) => console.log(member.user.username));
list.members.forEach((member) => console.log(member));

client.login("ODQ3MDMyODYxNTA0NTY5MzU1.GU4kIO.G_Z-nuMBfUMvkld2ETwLHFfczPx3cBCZGbCUeg");
