const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MUZAMMIL_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0JEUTN3NTlkbUJHRFJHQWVlRzNJZXpTalRyTytLV1NmQnVEeXdFTkRHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1ZwcUxyMlF4R1J4Vm02QzJvaHBXcElxb1R4bVp2eEQxWGlOOGZWU3NDQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTlhxK29PbUdsQ21XaGd4aUl6b1MraDJ1SFEvb1MvWitwRXBhU1lTN0drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsaHhldFU1MkF2cG40RWxYNDlHU3YxSjZ2VzNqT2xMK3dqUWxrN3REcUQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNNE14Q0U0VTNDSzNiZ2RqcS9ESnZzK3htRXoxVEdlZ3F4anZTNjB4VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5tZDU0bk15M1VmSFh4ZXQvcFg1NnNRRmtzNlRjN0RQNXk5WmdNU1pkV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RKQml1SUhoUkVrejNQQU5Sek80ZnJiQjk2NklPc0JrUHVsS1hTUERsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmtGNURvMjZEZkorOWpRMjdiSTFwYXJnTmRWM25JN0FYa2FZdWZBeldEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpPWmhKVHlhVWhhSjNMNCtpSStYME5MM2JhZG82azRsWFJuc1BRMWpnd2dFQzNNT1EyTnhjTUFJeXc3ZDh4d1dEZ2QrbUVpbkowN2l6TFh1YXgyZUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiI1ZEREcUV6K0JTKzgyLzNOcFpGUTltZUI3Z2dTcXBqRHlFSkhyekNROU5nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzODA4NTA1NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzlBQzU1QjkzREVEQjczRDhEREZGODI2NDg3ODE3NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzMzg2Njk3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFTEFJTkFNRCIsIm1lIjp7ImlkIjoiOTIzMTM4MDg1MDU1OjM1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTUyOTQxMTM2MjQxNzg6MzVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJdU9zd0VRdDhyc3lBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0R3lDbVorU0R5ZjJ4RUxoUXdQa3lhOFhFTThmRElPL2tOdktZSFdhQ2lvPSIsImFjY291bnRTaWduYXR1cmUiOiJtcXhUUitSWEo1UVNhOUdnSTRYUnU3RTVCMEhiZW9CQzEzL2pOWTlDSnppUGF1Y0FRNXJLRGRKZFA4ZXBsR2Z1OUVRN0NkNkprMG9Nc1dJNi9hN0FCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU2ZOSzZRVVVmRG56RnlYd1ROOVJubHRuRnd3d0o1T2U2Rm42Rm9MYUpPMnhlNTZZeW40TWNtMTkwS0RxR1dzYkg1L2NkTFBDWU9oNGlFODdITjE2Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzgwODUwNTU6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUJzZ3BtZmtnOG45c1JDNFVNRDVNbXZGeERQSHd5RHY1RGJ5bUIxbWdvcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzMzg2NjkzLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1B1In0=",
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
