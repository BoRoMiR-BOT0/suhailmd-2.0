const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+40743459185";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_37_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDY1LFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyLFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDksXG4gICAgICAgIDMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMixcbiAgICAgICAgNzcsXG4gICAgICAgIDYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYlJoQUZwY3dmY0RySy84bjFPOTRIeis0Tjl1c1RCcStSR0tvcm5PWG1KMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc0MzQ1OTE4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0M5QzA1Nzk3NDlCQTZEOTdCOEY2Qzg2RDhFNTkyMjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNzU3MDI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDA3NDM0NTkxODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY1ODcyOUQyQUZBMzZCQzMwRTc4M0YzOUVGRkQ1MTg3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTc1NzAyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzQzNDU5MTg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNTI4NzE2MTY3MThBN0NERTNFMkQzM0I2OTdCMkVGOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE3NTcwMzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc0MzQ1OTE4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDY0OTJDRTVCOUE0QUQ1MTFCQUM2M0Q2MUU5RDExREZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNzU3MDMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdwV1MxT2ZEUUVTMHhKSGw0VVcyLXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjdhMTZlNzctNDk1Yy00YTcxLWFmNDMtOGU3NTFmOTdmMzg1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMjUyLFxuICAgICAgOCxcbiAgICAgIDIzNSxcbiAgICAgIDE0NixcbiAgICAgIDc2LFxuICAgICAgNzQsXG4gICAgICA0MSxcbiAgICAgIDY5LFxuICAgICAgODcsXG4gICAgICAxNjYsXG4gICAgICAxMzYsXG4gICAgICAyNDAsXG4gICAgICAyMjMsXG4gICAgICAxNixcbiAgICAgIDExMCxcbiAgICAgIDMzLFxuICAgICAgMTEsXG4gICAgICAyNTUsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAxMDgsXG4gICAgICAyMixcbiAgICAgIDQ4LFxuICAgICAgMTk1LFxuICAgICAgMjksXG4gICAgICAxNzksXG4gICAgICA4NyxcbiAgICAgIDc5LFxuICAgICAgNCxcbiAgICAgIDE2LFxuICAgICAgMTQyLFxuICAgICAgOTksXG4gICAgICAxNjIsXG4gICAgICAxMjUsXG4gICAgICA0NyxcbiAgICAgIDUyLFxuICAgICAgODgsXG4gICAgICAxMTUsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzhMQTFUTjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQwNzQzNDU5MTg1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NDg3NjgxNDcyNTI1OToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvUm9NaVItQjBUXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkMyKzVJSEVOdUg0cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTR1VEWFNSSWVCbXErdW9OcFI0Qkk0STZ1SUFCbDNEYjE3eGJ5cWlyZEdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBaaHpWREpuaFVOVHNwaXJyeW8xWUtvYlVkbEYzNkZmVWdPZUJUdjhtRndveXhOWlY0WVJmUndtbmdCWGZDMXlLTlhoejVCT284OW5pZEtMT0N2ZkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVhMWtzdEpIR2laOWFtaXNodkNBcHhmV2FtY1Q0VGplQmtkQ2VVLzdoeDRTcVNjaTRKN243RnpaeVFjeCtaL1J2NDU4UGlOdERSSkV3NCt4RnFlb2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQwNzQzNDU5MTg1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTc1NzAyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUwxclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDFyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVGlxS0pTMHFnN0pzN2U1ZFJ5ZUZTdFZnMlhsN25tcjhGeGdlTWpEU2hibz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE4ODE5MDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE3NTcwMjQ5ODJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
