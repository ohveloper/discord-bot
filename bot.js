const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken("MTAxMzY4NTY0NzkwODgwMjU5MA.GUDN7p.hc2DFyr9a29k2uGNw5NNrnB4nKrYFlLGs6dIo8");

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1013685647908802590"), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login("MTAxMzY4NTY0NzkwODgwMjU5MA.GUDN7p.hc2DFyr9a29k2uGNw5NNrnB4nKrYFlLGs6dIo8");
