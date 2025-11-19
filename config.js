const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5ERmQwZ2lmUkMwNm4xeG5qcDJyUnNVeTB0MFFTaXpVcGhpS2xSSUpsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2hFTjkwL0ZtNlMxUmsyRHJEVENwWnNGRWdYZlVoV2N3MlA2Q3NWSE94MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTFFQdDdROS9ZTWNFb1pTWnhET1N5SHlocWVEMHJmRWx4cmhwVm1TOGxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudUo0bmdrdmZzdE1qMFQ2VWdhYU5WVFRZMHU5VjEwVCtNSVpVT3JmaFdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPWG1RQlhtYTd6TU5UdlMxK3FOUEhjUHArNHgwUnhKVXR0MEkwTlNaSEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5PN3VBZHBHQUc3SXU3SFFSOE95N1V4OTFCSThiMld5Zm5lKzJKQjkrelk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05YT3BpVjJOTEptTytCdGR3WmZwSnhxd0svQk45SjBybGdpN1IyQTBsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2ZVZVNWeGVGUi9WaDhmQzdRSm5VdGY5aWZ0a3RXWFlvTXFGL1I0NzlSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUwaGhFMkw5eDh3WmZyTE14QUNtS1d2YjlIZGdnVnpjMjYrVkx5MkdnS2N1Z3BvN2phTkVpdGNTbGtBRDlmc1dnS2RRVzN2QTNvQU1KWEwxSUIwMGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6ImFhRTRMVE5NM05UNWFpUFpoc2pGMlhUQmZFY0NocDVvTENPV25kUjhuRzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTQyODU0MjA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE2ODhGMkI5RkU4QTZGNDYxRkZCOEJDMDYwMEQxQkYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjM1ODg1MjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0Mjg1NDIwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NjE2MDQwQTQ2QzEwOUQxOEUwQUM0NkQyNjkxMjcxNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzNTg4NTIyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPQ0pMV1VCMlRyLTEtamUwaWcxQW5RIiwicGhvbmVJZCI6IjEwODExYzZmLWJlYWQtNDVkNy1iMzFhLTc3YTc4MTkxYjNiNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtWWMzS1FncmNRWHhYeUxvSTh5OGJqZHZLYlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXo3YUpnRXNndi94TjZuUE9uNVJrSW9WRWdrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFONjZSQ1pLIiwibWUiOnsiaWQiOiI5MjMxNDI4NTQyMDc6MTVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODg2OTA5ODI3NzcwMTI6MTVAbGlkIiwibmFtZSI6Ik11emFtbWlsIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdU13TDRHRUpqeitNZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLN0RYNks5SWFIWHNtTjdIK1lhajhSQ05zd080Y3pab0k5R1hmU3MxeGw4PSIsImFjY291bnRTaWduYXR1cmUiOiIwdDVyRlpzNnlBRGNncUp1WDJqZVZmeHZsd1FDOHFuSittUHB3QVFpdG1YbWYrZUt3ZkRtU2R5VGhnL0d1WmFHS1VxS0Zrem40TXNPRjFmR1lLQkpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNTNGQnlVREtUOFk3TmZQemI4dzE3Z1d4L2t6ZkFYWDFndWhRWmxybnVkUnB6TWNiUXZhUlZNbE0xWmo3YW1KY0lxUFd1Mjg2alovYzlNazZFL0NHaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDI4NTQyMDc6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3V3MStpdlNHaDE3SmpleC9tR28vRVFqYk1EdUhNMmFDUFJsMzByTmNaZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzNTg4NTE4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUw2TSJ9",
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
