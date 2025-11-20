Const fs = require('fs');
const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

// --- Helper Functions for Menu Structure ---

/**
 * Generates the main Ultra Pro Max styled menu caption.
 * @param {number} totalCommands
 * @returns {string}
 */
const generateMainMenuCaption = (totalCommands) => {
    // Fallback for missing config values
    const botName = config.BOT_NAME || 'UltraProMaxBot';
    const ownerName = config.OWNER_NAME || 'The Developer';
    const prefix = config.PREFIX || '.';
    const description = config.DESCRIPTION || 'A powerful WhatsApp Bot.';

    return `
╔═══✦❯༒ 𝐔𝐋𝐓𝐑𝐀 𝐏𝐑𝐎 𝐌𝐀𝐗 𝐌𝐄𝐍𝐔 ༒❮✦═══╗

╭───◉ *「 𝐁𝐎𝐓 𝐒𝐓𝐀𝐓𝐔𝐒 」*
│ ◦ 𝗡𝗮𝗺𝗲 : ${botName}
│ ◦ 𝗢𝘄𝗻𝗲𝗿 : MUZAMMIL
│ ◦ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Heroku
│ ◦ 𝗠𝗼𝗱𝗲 : PUBLIC
│ ◦ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 : ${totalCommands}+
│ ◦ 𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${prefix} ]
╰─────────────────

╭───◉ *「 𝐒𝐄𝐑𝐕𝐈𝐂𝐄𝐒 」* │ 📥 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥
│ 👥 𝗚𝗥𝗢𝗨𝗣
│ 😄 𝗙𝗨𝗡
│ 👑 𝗢𝗪𝗡𝗘𝗥
│ 🤖 𝗔𝗜
│ 🎎 𝗔𝗡𝗜𝗠𝗘
│ 🔄 𝗖𝗢𝗡𝗩𝗘𝗥𝗧
│ 📌 𝗢𝗧𝗛𝗘𝗥
│ 💞 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡𝗦
│ 🏠 𝗠𝗔𝗜𝗡
╰─────────────────

╭───◉ *「 𝐐𝐔𝐈𝐂𝐊 𝐀𝐂𝐂𝐄𝐒𝐒 」*
│ 1️⃣ » Download Menu
│ 2️⃣ » Group Menu  
│ 3️⃣ » Fun Menu
│ 4️⃣ » Owner Menu
│ 5️⃣ » AI Menu
│ 6️⃣ » Anime Menu
│ 7️⃣ » Convert Menu
│ 8️⃣ » Other Menu
│ 9️⃣ » Reactions Menu
│ 🔟 » Main Menu
╰─────────────────

╭───◉ *「 𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐃 」*
│ ✨ 300+ Commands
│ 🚀 Ultra Fast
│ 🔒 Secure
│ 📱 Multi-Device
│ 🎯 User Friendly
╰─────────────────

🗂️ *How to Use:* *1. Simple:* Type *${prefix}download* or *${prefix}group* etc.
*2. Interactive:* Reply to this message with a number (1-10)

🔮 *Powered by:* ${ownerName}
💫 *Description:* ${description}

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
    `.trim();
};

/**
 * Returns the data for all sub-menus.
 * @returns {object}
 */
const getMenuData = () => {
    // Fallback for missing config values
    const ownerName = config.OWNER_NAME || 'The Developer';

    return {
        '1': {
            title: "📥 *DOWNLOAD MENU* 📥",
            content: `
╔═══✦❯༒ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ༒❮✦═══╗

╭───◉ *「 𝐒𝐎𝐂𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀 」*
│ • .facebook [url]
│ • .tiktok [url] 
│ • .instagram [url]
│ • .twitter [url]
│ • .pinterest [url]
│ • .mediafire [url]
╰─────────────────

╭───◉ *「 𝐌𝐔𝐒𝐈𝐂/𝐕𝐈𝐃𝐄𝐎 」*
│ • .spotify [query]
│ • .play [song]
│ • .ytmp3 [url]
│ • .ytmp4 [url]
│ • .song [name]
│ • .video [url]
╰─────────────────

╭───◉ *「 𝐀𝐏𝐏𝐒 & 𝐈𝐌𝐀𝐆𝐄𝐒 」*
│ • .apk [app name]
│ • .apk2 [app name]
│ • .img [query]
│ • .pins [query]
╰─────────────────

🔧 *Total:* 25+ Download Commands
💾 *Status:* Active & Working

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '2': {
            title: "👥 *GROUP MENU* 👥",
            content: `
╔═══✦❯༒ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐍𝐀𝐆𝐄𝐑 ༒❮✦═══╗

╭───◉ *「 𝐌𝐀𝐍𝐀𝐆𝐄𝐌𝐄𝐍𝐓 」*
│ • .add @user
│ • .remove @user
│ • .kick @user
│ • .kickall
│ • .grouplink
╰─────────────────

╭───◉ *「 𝐀𝐃𝐌𝐈𝐍 𝐓𝐎𝐎𝐋𝐒 」*
│ • .promote @user
│ • .demote @user
│ • .mute [time]
│ • .unmute
│ • .lockgc
│ • .unlockgc
╰─────────────────

╭───◉ *「 𝐓𝐀𝐆𝐆𝐈𝐍𝐆 」*
│ • .tagall
│ • .tagadmins
│ • .hidetag [msg]
│ • .invite
╰─────────────────

👑 *Admin Required:* Yes
🔐 *Privacy:* Secure

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '3': {
            title: "😄 *FUN MENU* 😄",
            content: `
╔═══✦❯༒ 𝐅𝐔𝐍 & 𝐆𝐀𝐌𝐄𝐒 ༒❮✦═══╗

╭───◉ *「 𝐈𝐍𝐓𝐄𝐑𝐀𝐂𝐓𝐈𝐕𝐄 」*
│ • .shapar
│ • .rate @user
│ • .ship @user1 @user2
│ • .character
│ • .pickup
│ • .joke
╰─────────────────

╭───◉ *「 𝐆𝐀𝐌𝐄𝐒 」*
│ • .hack @user
│ • .insult @user
│ • .truth
│ • .dare
│ • .quiz
╰─────────────────

╭───◉ *「 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 」*
│ • .love @user
│ • .happy @user
│ • .sad @user
│ • .angry @user
╰─────────────────

🎮 *Fun Level:* Maximum
😊 *Mood:* Always Happy

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '4': {
            title: "👑 *OWNER MENU* 👑",
            content: `
╔═══✦❯༒ 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 ༒❮✦═══╗

╭───◉ *「 𝐁𝐎𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 」*
│ • .restart
│ • .shutdown
│ • .updatecmd
│ • .block @user
│ • .unblock @user
╰─────────────────

╭───◉ *「 𝐒𝐘𝐒𝐓𝐄𝐌 」*
│ • .setpp [image]
│ • .fullpp [image]
│ • .broadcast [msg]
│ • .eval [code]
╰─────────────────

╭───◉ *「 𝐈𝐍𝐅𝐎 」*
│ • .gjid
│ • .listcmd
│ • .runtime
│ • .status
╰─────────────────

⚡ *Access:* Owner Only
🔒 *Security:* Maximum

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '5': {
            title: "🤖 *AI MENU* 🤖",
            content: `
╔═══✦❯༒ 𝐀𝐑𝐓𝐈𝐅𝐈𝐂𝐈𝐀𝐋 𝐈𝐍𝐓𝐄𝐋𝐋𝐈𝐆𝐄𝐍𝐂𝐄 ༒❮✦═══╗

╭───◉ *「 𝐂𝐇𝐀𝐓 𝐀𝐈 」*
│ • .ai [query]
│ • • .gpt [query]
│ • .gpt3 [query]
│ • .gpt4 [query]
│ • .meta [query]
╰─────────────────

╭───◉ *「 𝐈𝐌𝐀𝐆𝐄 𝐀𝐈 」*
│ • .imagine [text]
│ • .imagine2 [text]
│ • .blackbox [query]
│ • .luma [query]
╰─────────────────

╭───◉ *「 𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈𝐒𝐄𝐃 」*
│ • .dj [query]
│ • .irfan [query]
│ • .khan [query]
╰─────────────────

🧠 *AI Model:* Advanced
🚀 *Speed:* Instant

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '6': {
            title: "🎎 *ANIME MENU* 🎎", 
            content: `
╔═══✦❯༒ 𝐀𝐍𝐈𝐌𝐄 𝐖𝐎𝐑𝐋𝐃 ༒❮✦═══╗

╭───◉ *「 𝐀𝐍𝐈𝐌𝐄 𝐈𝐌𝐀𝐆𝐄𝐒 」*
│ • .waifu
│ • .neko
│ • .loli
│ • .megumin
│ • .maid
│ • .awoo
╰─────────────────

╭───◉ *「 𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑𝐒 」*
│ • .animegirl
│ • .animeboy
│ • .naruto
│ • .foxgirl
│ • .garl
╰─────────────────

╭───◉ *「 𝐑𝐀𝐍𝐃𝐎𝐌 」*
│ • .fack
│ • .dog
│ • .anime1-5
│ • .animegirl1-5
╰─────────────────

🎌 *Quality:* HD
❤️ *Weeb Level:* Pro

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '7': {
            title: "🔄 *CONVERT MENU* 🔄",
            content: `
╔═══✦❯༒ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 ༒❮✦═══╗

╭───◉ *「 𝐌𝐄𝐃𝐈𝐀 」*
│ • .sticker [image]
│ • .sticker2 [image]
│ • .tomp3 [video]
│ • .emojimix 😊+😂
│ • .take [name,text]
╰─────────────────

╭───◉ *「 𝐓𝐄𝐗𝐓 」*
│ • .fancy [text]
│ • .tts [text]
│ • .trt [text]
│ • .base64 [text]
│ • .unbase64 [text]
╰─────────────────

╭───◉ *「 𝐅𝐎𝐑𝐌𝐀𝐓𝐒 」*
│ • .toimg [sticker]
│ • .togif [video]
│ • .tomp4 [gif]
╰─────────────────

🛠️ *Tools:* 20+ Converters
⚡ *Speed:* Ultra Fast

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '8': {
            title: "📌 *OTHER MENU* 📌",
            content: `
╔═══✦❯༒ 𝐔𝐓𝐈𝐋𝐈𝐓𝐈𝐄𝐒 ༒❮✦═══╗

╭───◉ *「 𝐓𝐎𝐎𝐋𝐒 」*
│ • .timenow
│ • .date
│ • .count [number]
│ • .calculate [math]
│ • .countx
╰─────────────────

╭───◉ *「 𝐑𝐀𝐍𝐃𝐎𝐌 」*
│ • .flip
│ • .coinflip
│ • .rcolor
│ • .roll
│ • .fact
╰─────────────────

╭───◉ *「 𝐒𝐄𝐀𝐑𝐂𝐇 」*
│ • .define [word]
│ • .news [query]
│ • .movie [name]
│ • .weather [city]
╰─────────────────

🔧 *Utilities:* 30+ Tools
📊 *Info:* Real-time

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '9': {
            title: "💞 *REACTIONS MENU* 💞",
            content: `
╔═══✦❯༒ 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 ༒❮✦═══╗

╭───◉ *「 𝐀𝐅𝐅𝐄𝐂𝐓𝐈𝐎𝐍 」*
│ • .cuddle @user
│ • .hug @user
│ • .kiss @user
│ • .lick @user
│ • .pat @user
╰─────────────────

╭───◉ *「 𝐅𝐔𝐍𝐍𝐘 」*
│ • .bully @user
│ • .bonk @user
│ • .yeet @user
│ • .slap @user
│ • .kill @user
╰─────────────────

╭───◉ *「 𝐄𝐗𝐏𝐑𝐄𝐒𝐒𝐈𝐎𝐍𝐒 」*
│ • .blush @user
│ • .smile @user
│ • .happy @user
│ • .wink @user
│ • .poke @user
╰─────────────────

💕 *Emotions:* Expressive
🎭 *Interactive:* Yes

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        },
        '10': {
            title: "🏠 *MAIN MENU* 🏠",
            content: `
╔═══✦❯༒ 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 ༒❮✦═══╗

╭───◉ *「 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 」*
│ • .ping
│ • .alive
│ • .runtime
│ • .uptime
│ • .owner
│ • .repo
╰─────────────────

╭───◉ *「 𝐂𝐎𝐍𝐓𝐑𝐎𝐋𝐒 」*
│ • .menu
│ • .help
│ • .restart
│ • .status
╰─────────────────

╭───◉ *「 𝐒𝐓𝐀𝐓𝐔𝐒 」*
│ 📱 Platform: Heroku
│ ⚡ Speed: Ultra Fast
│ 🔒 Security: Maximum
│ 🎯 Accuracy: 99.9%
╰─────────────────

🌟 *Version:* Ultra Pro Max
🔮 *Developer:* ${ownerName}

╚═══✦❯༒ 𝐌𝐔𝐙𝐀𝐌𝐌𝐈𝐋 𝐌𝐃 ༒❮✦═══╝
            `
        }
    };
};


// --- Main Command Handler ---

cmd({
    pattern: "menu",
    desc: "Show interactive menu system",
    category: "menu", 
    react: "🎛️",
    filename: __filename
}, async (conn, mek, m, { from, reply, text }) => {
    try {
        const totalCommands = Object.keys(commands).length;
        const menuData = getMenuData();
        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363403831162407@newsletter',
                newsletterName: config.OWNER_NAME || 'MUZAMMIL',
                serverMessageId: 143
            }
        };

        // 1. Check if a sub-menu number was provided (e.g., .menu 1)
        if (text && menuData[text.trim()]) {
             const selectedMenu = menuData[text.trim()];
             
             try {
                // Attempt to send with image
                await conn.sendMessage(
                    from,
                    {
                        image: { 
                            url: config.MENU_IMAGE_URL || 'https://i.ibb.co/0jqkQ5p/ultra-pro-max.jpg' 
                        },
                        caption: selectedMenu.content,
                        contextInfo: contextInfo
                    },
                    { quoted: mek }
                );
            } catch (e) {
                // Fallback to text if image fails
                await conn.sendMessage(
                    from,
                    { 
                        text: selectedMenu.content, 
                        contextInfo: contextInfo 
                    },
                    { quoted: mek }
                );
            }
            return;
        }

        // 2. If no valid text/number, send the main menu

        const menuCaption = generateMainMenuCaption(totalCommands);
        
        try {
            // Attempt to send main menu with image
            await conn.sendMessage(
                from,
                {
                    image: { 
                        url: config.MENU_IMAGE_URL || 'https://i.ibb.co/0jqkQ5p/ultra-pro-max.jpg' 
                    },
                    caption: menuCaption,
                    contextInfo: contextInfo,
                    headerType: 1
                },
                { quoted: mek }
            );
        } catch (e) {
            // Fallback to text if image fails
            await conn.sendMessage(
                from,
                { 
                    text: menuCaption, 
                    contextInfo: contextInfo 
                },
                { quoted: mek }
            );
        }

        // --- INTERACTIVE HANDLER REMOVED ---
        // The original code used a temporary messages.upsert listener (handler) which is complex
        // and prone to memory leaks in a multi-user environment.
        // The suggested usage is: User sends ".menu" -> Bot sends menu -> User sends ".menu 1" for Download Menu.

    } catch (e) {
        console.error('Menu Command Error:', e);
        await conn.sendMessage(
            from,
            { 
                text: `❌ *MENU ERROR* ❌\n\nAn error occurred while generating the menu. The system might be missing configuration values (like config.OWNER_NAME or config.MENU_IMAGE_URL).\n\nDetails: ${e.message.slice(0, 100)}...` 
            },
            { quoted: mek }
        );
    }
});
