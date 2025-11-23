const config = require('../config');
const { cmd, commands } = require('../command');

// MUZAMMIL_MD Styles
const nameStyles = [
    "🇲 🇺 🇿 🇦 🇲 🇲 🇮 🇱 _ 🇲 🇩",
    "✨ 𝕄𝕌ℤ𝔸𝕄𝕄𝕀𝕃_𝕄𝔻 ✨", 
    "💎 𝓜𝓤𝓩𝓐𝓜𝓜𝓘𝓛_𝓜𝓓 💎",
    "🔥 ⓂⓊⓏⓐⓜⓜⓘⓛ_Ⓜⓓ 🔥",
    "🚀 𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇_𝙈𝘿 🚀",
    "🌟 𝕸𝖀𝖅𝕬𝕸𝕸𝕴𝕷_𝕸𝕯 🌟",
    "🎯 𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇_𝙈𝘿 🎯",
    "⚡ 𝕄𝕌ℤ𝔸𝕄𝕄𝕀𝕃_𝕄𝔻 ⚡",
    "🏆 𝓜𝓤𝓩𝓐𝓜𝓜𝓘𝓛_𝓜𝓓 🏆",
    "💫 𝙈𝙐𝙕𝘼𝙈𝙈𝙄𝙇_𝙈𝘿 💫"
];

let currentStyle = 0;

cmd({
    pattern: "ping",
    alias: ["speed","pong"],
    use: '.ping',
    desc: "Check bot's response time",
    category: "main",
    react: "💎",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();
        
        // Reaction
        await conn.sendMessage(from, {
            react: { text: "⚡", key: mek.key }
        });

        const end = new Date().getTime();
        const speed = (end - start) / 1000;

        // Get Name Style
        const botName = nameStyles[currentStyle];
        currentStyle = (currentStyle + 1) % nameStyles.length;

        // Ping Message
        const pingMessage = `
╔═══✦〖 💠 𝑷𝑰𝑵𝑮 𝑺𝑻𝑨𝑻𝑼𝑺 💠 〗✦═══╗
│
│    ✦ *${botName}* ✦
│
│  📊 *𝐒𝐏𝐄𝐄𝐃:* ${speed.toFixed(2)}ms
│  ⚡ *𝐒𝐓𝐀𝐓𝐔𝐒:* Ultra Fast
│  💎 *𝐏𝐄𝐑𝐅𝐎𝐑𝐌𝐀𝐍𝐂𝐄:* Excellent
│  🚀 *𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐄:* Optimal
│
╚═══✦《 🏆 𝑴𝑼𝒁𝑨𝑴𝑴𝑰𝑳_𝑴𝑫 🏆 》✦═══╝
`;

        await conn.sendMessage(from, {
            text: pingMessage,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363403831162407@newsletter',
                    newsletterName: "✨ 𝕄𝕌ℤ𝔸𝕄𝕄𝕀𝕃_𝕄𝔻 ✨",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Ping Error:", error);
        reply(`❌ *ERROR:* ${error.message}`);
    }
});

// Ping2 Command
cmd({
    pattern: "ping2",
    alias: ["speedtest"],
    desc: "Advanced ping test",
    category: "main", 
    react: "👑",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const startTime = Date.now();
        const processingMsg = await reply("🔮 *Performance Test Running...*");
        
        const endTime = Date.now();
        const pingTime = endTime - startTime;

        // Performance Analysis
        let status = "";
        let emoji = "";

        if (pingTime < 100) {
            status = "𝐔𝐋𝐓𝐑𝐀 𝐅𝐀𝐒𝐓";
            emoji = "⚡";
        } else if (pingTime < 300) {
            status = "𝐕𝐄𝐑𝐘 𝐅𝐀𝐒𝐓"; 
            emoji = "🚀";
        } else if (pingTime < 600) {
            status = "𝐅𝐀𝐒𝐓";
            emoji = "💨";
        } else {
            status = "𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐄";
            emoji = "🐢";
        }

        const result = `
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

       🏁 *𝑺𝑷𝑬𝑬𝑫𝑻𝑬𝑺𝑻* 🏁

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

✦ *𝐁𝐎𝐓 𝐍𝐀𝐌𝐄:* 𝕄𝕌ℤ𝔸𝕄𝕄𝕀𝕃_𝕄𝔻
✦ *𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐄:* ${pingTime}ms
✦ *𝐒𝐓𝐀𝐓𝐔𝐒:* ${status} ${emoji}
✦ *𝐒𝐄𝐑𝐕𝐄𝐑:* Optimized

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

        💫 *𝑴𝑼𝒁𝑨𝑴𝑴𝑰𝑳_𝑴𝑫* 💫
`;

        await conn.sendMessage(from, { 
            text: result, 
            edit: processingMsg.key 
        });

    } catch (error) {
        console.error(error);
        reply(`🎯 *TEST FAILED:* ${error.message}`);
    }
});

// Ultimate Ping
cmd({
    pattern: "mping", 
    alias: ["mp","muzping"],
    desc: "Ultimate ping command",
    category: "main",
    react: "🏆",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const start = Date.now();
        
        // Multiple reactions
        await conn.sendMessage(from, { react: { text: "💎", key: mek.key } });
        await new Promise(resolve => setTimeout(resolve, 200));
        await conn.sendMessage(from, { react: { text: "👑", key: mek.key } });

        const latency = Date.now() - start;

        const ultimatePing = `
██████████████████████

   ♛ *𝑼𝑳𝑻𝑰𝑴𝑨𝑻𝑬 𝑷𝑰𝑵𝑮* ♛

██████████████████████

★ *𝐁𝐎𝐓:* 𝗠𝗨𝗭𝗔𝗠𝗠𝗜𝗟_𝗠𝗗
★ *𝐏𝐈𝐍𝐆:* ${latency}ms
★ *𝐒𝐓𝐀𝐓𝐔𝐒:* Active
★ *𝐏𝐎𝐖𝐄𝐑:* Ultra High

██████████████████████

    ✨ *𝑴𝑼𝒁𝑨𝑴𝑴𝑰𝑳_𝑴𝑫* ✨
`;

        await reply(ultimatePing);

    } catch (error) {
        console.error(error);
        reply(`💢 *ERROR:* ${error.message}`);
    }
});
