const { cmd } = require('../command');

// 🛠️ Support Command
cmd({
    pattern: "support",
    desc: "Get the link to the support group or page.",
    react: "🛠️",
    category: "utility",
    use: ".support",
}, async (conn, mek, m) => {
    try {
        const channelLink = "https://whatsapp.com/channel/0029Vb6Qyym7YSd3VRCxxQ1B";
        const supportLink = "https://chat.whatsapp.com/IdgffeAQqs60NKFaBZAO3B?mode=wwc";

        // Stylish message send
        const sentMsg = await conn.sendMessage(m.chat, {
            text: `╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
> *_Tʜᴀɴᴋs ғᴏʀ ᴄᴏɴᴛᴀᴄᴛɪɴɢ ᴡɪᴛʜ 𝙼𝚄𝚉𝙰𝙼𝙼𝙸𝙻_𝙼𝙳 _*
> *_ʜᴇʀᴇ's ᴛʜᴇ ʟɪɴᴋ ᴛᴏ ᴏᴜʀ ᴏғғɪᴄɪᴀʟ 𝙼𝚄𝚉𝙰𝙼𝙼𝙸𝙻_𝙼𝙳 ᴄʜᴀɴɴᴇʟ ᴊᴏɪɴ ᴜs ᴛᴏ sᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ_*
> *_Fᴏʟʟᴏᴡ Wʜᴀᴛsᴘᴘ Cʜᴀɴɴᴇʟ_*
> *_${channelLink}_*
> ------------------------------------------------
> *_ɴᴇᴇᴅ ʜᴇʟᴘ ᴏʀ ʜᴀᴠᴇ ǫᴜᴇsᴛɪᴏɴs ᴊᴏɪɴ ᴛʜᴇ 𝙼𝚄𝚉𝙰𝙼𝙼𝙸𝙻_𝙼𝙳 sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ғᴇᴇʟ ғʀᴇᴇ ᴛᴏ ᴀsᴋ ǫᴜᴇsᴛɪᴏɴs ᴏʀ ʀᴇᴘᴏʀᴛ ɪssᴜᴇs_*
> *_Jᴏɪɴ Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ_*
> *_${supportLink}_*
> ------------------------------------------------
      *_𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙼𝚄𝚉𝙰𝙼𝙼𝙸𝙻_𝙼𝙳_*
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯`
        }, { quoted: mek });

        // Auto reaction on sent message
        await conn.sendMessage(m.chat, { react: { text: "👍", key: sentMsg.key } });

    } catch (error) {
        console.error("Error sending support info:", error.message);
        await m.reply("❌ Sorry, an error occurred while trying to send the support information.");
    }
});