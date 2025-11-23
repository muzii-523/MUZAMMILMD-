const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MUZAMMIL_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hjKzlCQnVhZEt4OFBhSWFVQXgybFZRczJDa0w3NnE5ck8wMUdSbk1HVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0wyNmFEZWdyMFhnOG1zS1p3VlZBdnFmZFhDN3IvdWEzak1jNnYrRVppdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTGJpZ1U0VE45eEUzVVFicmFuVlFVQk5ZZlpYd040T3RxYk13aXplT0ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZHNKK0lvYkF1UWxTL0J6K1VOQUY5a0pCaWp3SzJwM0pVUy9TU09pNkJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNEMTlueGFuays1TlZvQm14ZmtnL2dpMFplL2RGcUFUVVFKZndpS3FUbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc0V1hNVFRCM1hqck00NVQ2WmZINCtNN0hHSWpKdXhDVHBCT2pIRThnd0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU40TDJkWVdqZXlCck04SE5mUXVEdktycVVwTGozM1lqWTgrN0s4cm1WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm5DZUJjaTRZZzFLWEV3b21SUlFsNFExbWpmaUc0aVFCcldIS00yNHlEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ5MWtSNk5pYUp4SGpqR0tqMFJESUZLM0hzTis4eUpUcTdzc0ZPeUdqWElUU2FnTXQvb2hqY1BLc2NWZGtLdS8wRVYrQ1JFSzM4Qldtcmd2NkRGUENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6Ilk0cUEwZjJYM3RLMzBuR1pCYkx2elc4SjQ2MjNmUnJGL3lZMmIrMGQ4ZkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVXaG9NSHRWUWh5ckF3NXJXNFVTeUEiLCJwaG9uZUlkIjoiZGVmYTFkNjUtOGE1My00NTQwLTg5YzItMzg5MDFjY2E2YjQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml0alNJcnlKN3J3MEFsK3VPeGFLc0pxenBOOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1am9NcXJVRHBycDA1NzB6RlFQQ1VMdmY4SWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNEdURTJTRFIiLCJtZSI6eyJpZCI6IjkyMzE0Mjg1NDIwNzoyOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4ODY5MDk4Mjc3NzAxMjoyOEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPTndMNEdFSWpRak1rR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iks3RFg2SzlJYUhYc21ON0grWWFqOFJDTnN3TzRjelpvSTlHWGZTczF4bDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik0zK0hoVjc3bUNpVW5NUzh0OEF5YjVEWk1qSzhSMEZIT3RQUnFuRno4ZGtiZVZsQzMzcE9WcnBLeGNXTjdTZEZrVHdpKzVlN3ZJQmErL0U1SWFnTER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoQk0yUk5sc1ZaOG9YMGdIUzlxMGRtVjQyM3d0TExGNzRFSW1oQnFZR3B0TXBqRHVYRVdUck90VkZZTHlLdTBrQ3VWRUdiT0xMa1JQVEtNQVlaMStEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE0Mjg1NDIwNzoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTdXcxK2l2U0doMTdKamV4L21Hby9FUWpiTUR1SE0yYUNQUmwzMHJOY1pmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjM5MTE3MDEsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3VGIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MUZAMMIL_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/80ntso.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MUZAMMIL_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "MUZAMMIL_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923142854207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MUZAMMIL_MD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 MUZAMMIL_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/80ntso.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*MUZAMMIL_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923142854207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
