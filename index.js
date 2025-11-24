/****************************************************************
*  ███╗   ███╗██╗   ██╗███████╗ █████╗ ███╗   ███╗███╗   ███╗██╗██╗     *
*  ████╗ ████║██║   ██║╚══███╔╝██╔══██╗████╗ ████║████╗ ████║██║██║     *
*  ██╔████╔██║██║   ██║  ███╔╝ ███████║██╔████╔██║██╔████╔██║██║██║     *
*  ██║╚██╔╝██║██║   ██║ ███╔╝  ██╔══██║██║╚██╔╝██║██║╚██╔╝██║██║██║     *
*  ██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║███████╗*
*  ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝╚══════╝*
*                                                                      *
*  ███╗   ███╗██████╗                                                 *
*  ████╗ ████║██╔══██╗                                                *
*  ██╔████╔██║██║  ██║                                                *
*  ██║╚██╔╝██║██║  ██║                                                *
*  ██║ ╚═╝ ██║██████╔╝                                                *
*  ╚═╝     ╚═╝╚═════╝                                                 *
*                                                                      *
*  🔥 CREATED BY: MUZAMMIL                                             *
*  🚀 VERSION: 3.0.0                                                  *
****************************************************************/

// ==================== MUZAMMIL_MD IMPORTS ====================
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  jidNormalizedUser,
  isJidBroadcast,
  getContentType,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  AnyMessageContent,
  prepareWAMessageMedia,
  areJidsSameUser,
  downloadContentFromMessage,
  MessageRetryMap,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  generateMessageID, 
  makeInMemoryStore,
  jidDecode,
  fetchLatestBaileysVersion,
  Browsers
} = require('@whiskeysockets/baileys');

// ==================== MUZAMMIL_MD CONSOLE DISPLAY ====================
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  ███╗   ███╗██╗   ██╗███████╗ █████╗ ███╗   ███╗███╗   ███╗║
║  ████╗ ████║██║   ██║╚══███╔╝██╔══██╗████╗ ████║████╗ ████║║
║  ██╔████╔██║██║   ██║  ███╔╝ ███████║██╔████╔██║██╔████╔██║║
║  ██║╚██╔╝██║██║   ██║ ███╔╝  ██╔══██║██║╚██╔╝██║██║╚██╔╝██║║
║  ██║ ╚═╝ ██║╚██████╔╝███████╗██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║║
║  ╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝║
║                                                              ║
║  ███╗   ███╗██████╗   ██████╗ ██████╗ ███████╗██████╗       ║
║  ████╗ ████║██╔══██╗ ██╔════╝ ██╔══██╗██╔════╝██╔══██╗      ║
║  ██╔████╔██║██║  ██║ ██║  ███╗██████╔╝█████╗  ██║  ██║      ║
║  ██║╚██╔╝██║██║  ██║ ██║   ██║██╔══██╗██╔══╝  ██║  ██║      ║
║  ██║ ╚═╝ ██║██████╔╝ ╚██████╔╝██║  ██║███████╗██████╔╝      ║
║  ╚═╝     ╚═╝╚═════╝   ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝       ║
║                                                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║          🚀 WELCOME TO MUZAMMIL_MD                          ║
║                     Version 3.0.0                           ║
║                                                              ║
║          👑 CREATED BY: MUZAMMIL                            ║
║          💎 EXCLUSIVE CUSTOM BUILD                         ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`);

// ==================== MUZAMMIL_MD CONFIGURATION ====================
const MUZAMMIL_MD = {
  NAME: "MUZAMMIL_MD",
  VERSION: "3.0.0",
  CREATOR: "MUZAMMIL",
  OWNERS: ["923142854207", "923237045919", "923462054847"]
};

// ==================== MUZAMMIL_MD IMPORTS ====================
const l = console.log;
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions');
const { AntiDelDB, initializeAntiDeleteSettings, setAnti, getAnti, getAllAntiDeleteSettings, saveContact, loadMessage, getName, getChatSummary, saveGroupMetadata, getGroupMetadata, saveMessageCount, getInactiveGroupMembers, getGroupMembersMessageCount, saveMessage } = require('./data');
const fs = require('fs');
const ff = require('fluent-ffmpeg');
const P = require('pino');
const config = require('./config');
const GroupEvents = require('./lib/groupevents');
const qrcode = require('qrcode-terminal');
const StickersTypes = require('wa-sticker-formatter');
const util = require('util');
const { sms, downloadMediaMessage, AntiDelete } = require('./lib');
const FileType = require('file-type');
const axios = require('axios');
const { File } = require('megajs');
const { fromBuffer } = require('file-type');
const bodyparser = require('body-parser');
const os = require('os');
const Crypto = require('crypto');
const path = require('path');
const prefix = config.PREFIX;

// ==================== MUZAMMIL_MD CACHE SYSTEM ====================
const CACHE_DIR = path.join(os.tmpdir(), 'muzammil_md_cache');
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  console.log('✅ MUZAMMIL_MD CACHE SYSTEM INITIALIZED');
}

const cacheCleaner = () => {
  fs.readdir(CACHE_DIR, (err, files) => {
    if (!err) {
      const now = Date.now();
      files.forEach(file => {
        const filePath = path.join(CACHE_DIR, file);
        try {
          const stats = fs.statSync(filePath);
          if (now - stats.mtimeMs > 10 * 60 * 1000) {
            fs.unlinkSync(filePath);
          }
        } catch (e) {}
      });
    }
  });
};
setInterval(cacheCleaner, 5 * 60 * 1000);

// ==================== MUZAMMIL_MD SESSION SYSTEM ====================
if (!fs.existsSync(__dirname + '/sessions/creds.json')) {
  if(!config.SESSION_ID) {
    console.log(`
╔══════════════════════════════════════════════╗
║             🚫 SESSION ERROR                ║
╠══════════════════════════════════════════════╣
║  Please add your session to SESSION_ID env!  ║
║        Contact: ${MUZAMMIL_MD.OWNERS[0]}         ║
╚══════════════════════════════════════════════╝
    `);
    process.exit(1);
  }
  
  try {
    const sessionData = config.SESSION_ID.replace("MUZAMMIL_MD~", '');
    const decodedData = Buffer.from(sessionData, 'base64').toString('utf-8');
    fs.writeFileSync(__dirname + '/sessions/creds.json', decodedData);
    console.log('✅ MUZAMMIL_MD SESSION LOADED SUCCESSFULLY');
  } catch (err) {
    console.log(`
╔══════════════════════════════════════════════╗
║            💥 SESSION FAILED               ║
╠══════════════════════════════════════════════╣
║         Error decoding session data!         ║
╚══════════════════════════════════════════════╝
    `);
    process.exit(1);
  }
}

// ==================== MUZAMMIL_MD SERVER ====================
const express = require("express");
const app = express();
const port = process.env.PORT || 9090;

app.get("/", (req, res) => {
  res.json({
    status: "online",
    bot: MUZAMMIL_MD.NAME,
    version: MUZAMMIL_MD.VERSION,
    creator: MUZAMMIL_MD.CREATOR,
    uptime: process.uptime(),
    memory: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
  });
});

app.listen(port, () => {
  console.log(`
╔══════════════════════════════════════════════╗
║            🌐 MUZAMMIL_MD SERVER           ║
╠══════════════════════════════════════════════╣
║  Port: ${port}                                 ║
║  URL: http://localhost:${port}                   ║
║  Time: ${new Date().toLocaleTimeString()}          ║
║  Status: SYSTEM ACTIVE                     ║
╚══════════════════════════════════════════════╝
  `);
});

// ==================== MUZAMMIL_MD CONNECTION ====================
async function startMUZAMMIL_MD() {
  console.log(`
╔══════════════════════════════════════════════╗
║          🔄 STARTING MUZAMMIL_MD           ║
╠══════════════════════════════════════════════╣
║  🤖 Bot: ${MUZAMMIL_MD.NAME}                    ║
║  🏷️ Version: ${MUZAMMIL_MD.VERSION}                ║
║  👑 Creator: ${MUZAMMIL_MD.CREATOR}                  ║
║  💎 Status: CONNECTING...                  ║
╚══════════════════════════════════════════════╝
  `);
  
  const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/sessions/');
  const { version } = await fetchLatestBaileysVersion();

  const conn = makeWASocket({
    logger: P({ level: 'silent' }),
    printQRInTerminal: true,
    browser: Browsers.macOS("Safari"),
    syncFullHistory: true,
    auth: state,
    version,
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    emitOwnEvents: true
  });

  // ==================== MUZAMMIL_MD EVENT HANDLERS ====================
  conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;
    
    if (qr) {
      console.log(`
╔══════════════════════════════════════════════╗
║             📱 QR CODE READY               ║
╠══════════════════════════════════════════════╣
║   Scan QR code to activate MUZAMMIL_MD      ║
╚══════════════════════════════════════════════╝
      `);
    }
    
    if (connection === 'close') {
      const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log(`
╔══════════════════════════════════════════════╗
║           🔌 CONNECTION LOST               ║
╠══════════════════════════════════════════════╣
║  Status: ${shouldReconnect ? 'RECONNECTING...' : 'LOGIN REQUIRED'}   ║
╚══════════════════════════════════════════════╝
      `);
      
      if (shouldReconnect) {
        setTimeout(startMUZAMMIL_MD, 5000);
      }
    } else if (connection === 'open') {
      console.log(`
╔══════════════════════════════════════════════╗
║           ✅ MUZAMMIL_MD CONNECTED         ║
╠══════════════════════════════════════════════╣
║  🤖 ${MUZAMMIL_MD.NAME}                    ║
║  🚀 ${MUZAMMIL_MD.VERSION}                ║
║  👑 ${MUZAMMIL_MD.CREATOR}                  ║
║  ⏰ ${new Date().toLocaleTimeString()}          ║
║  💎 SYSTEM ACTIVATED                      ║
╚══════════════════════════════════════════════╝
      `);
      
      // Load Plugins
      console.log('⚙️  Loading MUZAMMIL_MD Plugins...');
      const pluginPath = require('path');
      const plugins = fs.readdirSync("./plugins/").filter(plugin => 
        pluginPath.extname(plugin).toLowerCase() === ".js"
      );
      
      plugins.forEach(plugin => {
        try {
          require("./plugins/" + plugin);
          console.log(`   ✅ ${plugin}`);
        } catch (error) {
          console.log(`   ❌ ${plugin}`);
        }
      });
      
      console.log(`📦 Plugins Loaded: ${plugins.length}`);

      // Send Welcome Message
      const welcomeMsg = `
🤖 𝗠𝗨𝗭𝗔𝗠𝗠𝗜𝗟_𝗠𝗗 𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘𝗗

╔══════════════════════╗
   🚀 𝗦𝗬𝗦𝗧𝗘𝗠 𝗢𝗡𝗟𝗜𝗡𝗘
╚══════════════════════╝

📊 𝗦𝘆𝘀𝘁𝗲𝗺 𝗜𝗻𝗳𝗼:
┌─ 👑 𝗖𝗿𝗲𝗮𝘁𝗼𝗿: ${MUZAMMIL_MD.CREATOR}
├─ ⚡ 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: ${MUZAMMIL_MD.VERSION}
├─ 🔧 𝗣𝗿𝗲𝗳𝗶𝘅: ${prefix}
├─ 💾 𝗠𝗲𝗺𝗼𝗿𝘆: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
├─ 🕒 𝗨𝗽𝘁𝗶𝗺𝗲: ${runtime(process.uptime())}
└─ 📅 𝗟𝗮𝘂𝗻𝗰𝗵: ${new Date().toLocaleDateString()}

🎯 𝗙𝗲𝗮𝘁𝘂𝗿𝗲𝘀:
┌─ 🔄 Anti-Delete Messages
├─ 🎭 Auto-Reactions
├─ 📊 Advanced Analytics
├─ 🛡️ Enhanced Security
├─ 🎨 Premium Stickers
└─ ⚡ Ultra Fast Performance

📢 𝗖𝗼𝗻𝘁𝗮𝗰𝘁:
┌─ 📱 WhatsApp Channel: 
   https://whatsapp.com/channel/0029Vb6Qyym7YSd3VRCxxQ1B
├─ 💾 GitHub: 
   https://github.com/hissari-786/Muzammil-MD.git
└─ 🐛 Support: Above Repository

© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗠𝘂𝘇𝗮𝗺𝗺𝗶𝗹_𝗠𝗗 🚀
      `.trim();

      conn.sendMessage(conn.user.id, { 
        image: { 
          url: `https://files.catbox.moe/fqz28g.jpg`
        },
        caption: welcomeMsg
      });

      // Set Status
      conn.setStatus(`🚀 ${MUZAMMIL_MD.NAME} ${MUZAMMIL_MD.VERSION} | Active`);
    }
  });

  conn.ev.on('creds.update', saveCreds);

  // ==================== MUZAMMIL_MD MESSAGE HANDLER ====================
  conn.ev.on('messages.upsert', async(mek) => {
    mek = mek.messages[0];
    if (!mek.message) return;
    
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') 
      ? mek.message.ephemeralMessage.message 
      : mek.message;

    console.log(`📨 Message from: ${mek.key.remoteJid}`);

    // Auto-Read
    if (config.READ_MESSAGE === 'true') {
      await conn.readMessages([mek.key]);
    }

    // Status Handler
    if (mek.key && mek.key.remoteJid === 'status@broadcast') {
      if (config.AUTO_STATUS_SEEN === "true") {
        await conn.readMessages([mek.key]);
      }
      
      if (config.AUTO_STATUS_REACT === "true") {
        const emojis = ['🔥', '⚡', '💫', '🌟', '🎯', '🚀', '💎', '👑'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        await conn.sendMessage(mek.key.remoteJid, {
          react: { text: randomEmoji, key: mek.key }
        });
      }
      
      if (config.AUTO_STATUS_REPLY === "true") {
        const user = mek.key.participant;
        const text = `🚀 ${config.AUTO_STATUS_MSG || "MUZAMMIL_MD - Thanks for the status!"}`;
        await conn.sendMessage(user, { text: text, react: { text: '⚡', key: mek.key } }, { quoted: mek });
      }
    }

    await saveMessage(mek);

    const m = sms(conn, mek);
    const type = getContentType(mek.message);
    const from = mek.key.remoteJid;
    
    const body = (type === 'conversation') ? mek.message.conversation 
      : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text 
      : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption 
      : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption 
      : '';

    const isCmd = body.startsWith(prefix);
    const sender = mek.key.fromMe ? conn.user.id : (mek.key.participant || mek.key.remoteJid);
    const senderNumber = sender.split('@')[0];
    
    // Owner Recognition
    if (MUZAMMIL_MD.OWNERS.includes(senderNumber) && !m.message.reactionMessage) {
      const ownerEmojis = ["👑", "💎", "⚡", "🎯", "🚀", "🌟", "🔥", "💫"];
      const ownerEmoji = ownerEmojis[Math.floor(Math.random() * ownerEmojis.length)];
      m.react(ownerEmoji);
    }

    // Auto React
    if (config.AUTO_REACT === 'true' && !m.message.reactionMessage) {
      const reactions = ['🔥', '⚡', '💫', '🌟', '🎯', '🚀', '💎', '👑', '❤️', '🎨'];
      const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
      m.react(randomReaction);
    }

    // Process Commands
    if (isCmd) {
      const events = require('./command');
      const cmdName = body.slice(prefix.length).trim().split(" ")[0].toLowerCase();
      const cmd = events.commands.find(cmd => cmd.pattern === cmdName) || 
                  events.commands.find(cmd => cmd.alias && cmd.alias.includes(cmdName));
      
      if (cmd) {
        try {
          if (cmd.react) {
            conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }});
          }
          
          await cmd.function(conn, mek, m, {
            from, body, isCmd, command: cmdName, 
            args: body.trim().split(/ +/).slice(1),
            q: body.trim().split(/ +/).slice(1).join(' '),
            text: body.trim().split(/ +/).slice(1).join(' '),
            isGroup: from.endsWith('@g.us'),
            sender, senderNumber,
            reply: (text) => conn.sendMessage(from, { text }, { quoted: mek }),
            MUZAMMIL_MD,
            isOwner: MUZAMMIL_MD.OWNERS.includes(senderNumber)
          });
          
        } catch (error) {
          console.log("💥 Command Error:", error);
        }
      }
    }
  });

  // Anti-Delete
  conn.ev.on('messages.update', async updates => {
    for (const update of updates) {
      if (update.update.message === null) {
        console.log("🛡️ Anti-Delete Activated");
        await AntiDelete(conn, updates);
      }
    }
  });

  // Group Events
  conn.ev.on("group-participants.update", (update) => GroupEvents(conn, update));

  // Add Utilities here...
  conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
    let mime = '';
    let res = await axios.head(url)
    mime = res.headers['content-type']
    if (mime.split("/")[1] === "gif") {
      return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
    }
    let type = mime.split("/")[0] + "Message"
    if (mime === "application/pdf") {
      return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "image") {
      return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "video") {
      return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
    }
    if (mime.split("/")[0] === "audio") {
      return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
    }
  }
}

// ==================== START MUZAMMIL_MD ====================
setTimeout(() => {
  console.log(`
╔══════════════════════════════════════════════╗
║          🚀 STARTING MUZAMMIL_MD           ║
╠══════════════════════════════════════════════╣
║  🤖 ${MUZAMMIL_MD.NAME}                    ║
║  👑 ${MUZAMMIL_MD.CREATOR}                  ║
║  🏷️ ${MUZAMMIL_MD.VERSION}                ║
║  💎 Exclusive Custom Build                 ║
╚══════════════════════════════════════════════╝
  `);
  startMUZAMMIL_MD();
}, 4000);

// Error Handling
process.on('unhandledRejection', (reason, promise) => {
  console.log(`
╔══════════════════════════════════════════════╗
║             ⚠️  SYSTEM ERROR               ║
╠══════════════════════════════════════════════╣
║  Unhandled Rejection Detected!              ║
╚══════════════════════════════════════════════╝
  `);
});

process.on('uncaughtException', (error) => {
  console.log(`
╔══════════════════════════════════════════════╗
║             💥 CRITICAL ERROR              ║
╠══════════════════════════════════════════════╣
║  System Error: ${error.message}            ║
╚══════════════════════════════════════════════╝
  `);
});
