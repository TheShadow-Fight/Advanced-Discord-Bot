const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    Client,
    GatewayIntentBits
} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
});

const TOKEN = 'YOUR_BOT_TOKEN'; // Replace with your bot's token

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!myusername') {
        message.reply(`Your username is: ${message.author.username}`);
    }

    if (message.content === '!ban') {
        message.reply('You have been banned! Just kidding, I cannot ban you.');
    }

    if (message.content === '!question') {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('capital_paris')
                .setLabel('Paris')
                .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
                .setCustomId('capital_usa')
                .setLabel('USA')
                .setStyle(ButtonStyle.Danger)
        );

        message.reply({
            content: 'What is the capital of France?',
            components: [row]
        });
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'capital_paris') {
        await interaction.reply({ content: 'Correct!', ephemeral: true });
    } else if (interaction.customId === 'capital_usa') {
        await interaction.reply({ content: 'Not quite!', ephemeral: true });
    }
});

client.login(TOKEN);
