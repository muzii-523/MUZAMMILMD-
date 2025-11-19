const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUkyOVlmS09vcnhmMGIwRmJISjM5aHcxSVhwaHdYK0NoMGErYS82VlFWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDUwcElLeHhSZGpFR2Z5RXNuRTJrYldSYk05M0g5dkxkTTRRQVFaZTduYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRDY1MURMc3hMK1NvSkpCNWp3dmU0djZVZ2tDMEs4WGVKWDJQVGVZazNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvM0wrMnoxcWNIMytnbzhZM3ZLMGY3Z2RrYXVDRFdTOEtLanFIY1dxM2tjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDaEVEeUFMVHc0WEhWOGZvU09COTdGV1JVSkdmbDJNS1VuN2VyYTc0VTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRuWGExMU12aHJqMmRYamZRMUJnL3l0MVhmU0tpY0dDM1hVVElvNnVFa2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlXdlQ4RGxWbmZOOFJzWUhZWXBKTGE1eEFGQWRpKzlSc0pZSDlURVZXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXZMNXZQa1lQN0JRNzFmMXRRQWVOUFpVSE1HSVAvQkpJNXdYcHBvOFdCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV3K0FnVEVrZlZNdnRGbDhLVnFsWThWQmJlR09EWEJ4WTN1TFFWWEwrbUlSRWVFb2tCZzk4dXdySXR3L0M3SERWUWJ1QTRhOURvMDR1ellDZHZxRmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJUNU8zQkFSenV4ZUpJMTJ2RHUyd09EOGt3Y1RueWVLcVpOSFBBaDgvM3hJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfUWJuSWtWUFJ2LTFkQjI3cmNOSU9BIiwicGhvbmVJZCI6IjNlM2QyYjhhLTg0NTctNGQxMy1iOGFiLWFhZmY5NDQxNmI4MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5clJBRFFhMSszQ21xNUdhdzVnRXpLc0trV3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHBZZ2FaVnVjZzFzaDNYeTNpNjdrVXh2bk1RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5NWkoyVk1NIiwibWUiOnsiaWQiOiI5MjMxNDI4NTQyMDc6OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4ODY5MDk4Mjc3NzAxMjo5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGFNd0w0R0VPK1crTWdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSzdEWDZLOUlhSFhzbU43SCtZYWo4UkNOc3dPNGN6Wm9JOUdYZlNzMXhsOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUZhd3lTUE5NN1hWR041eDk0ZjZwTEFQR2hPME9PUHJmUFphdEY3MDc4Si9UQ3hINW1acFpQMEU0Z1d4c0xzSlRCUWpLZTFpV2pPWUNDdTNNOG8zQnc9PSIsImRldmljZVNpZ25hdHVyZSI6ImF5K2pMSXQ2RURCSnFJTnhrdEZMV3VMcWNQY0E4RHpQT2NTTnZlZmFtSHIzUllram00TngrZ1ZmMWY4cVFKU0cvdVQyMnFvT3h1OVd1VzlJcUJqN2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTQyODU0MjA3OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3V3MStpdlNHaDE3SmpleC9tR28vRVFqYk1EdUhNMmFDUFJsMzByTmNaZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzNTc2Njk5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNGdyJ9",
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
