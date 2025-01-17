const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7ugCXC4D#YhnrT4dBRe6ccdKbPiP6N7fTAzUWuI88EpYFLiK6DPo", // Add your session id
PREFIX: process.env.PREFIX || ".",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
STATUES_REPLY: process.env.STATUES_REPLY || "false",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
ANTI_LINK: process.env.ANTI_LINK || "falae",
ANTI_BAD: process.env.ANTI_BAD || "false",   
READ_MESSAGE: process.env.READ_MESSAGE || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '0769687099' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
};
