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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_43_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNpSkhkTkhtUzlROWc5M1gyaUttaGdaV1d3ejR5alVRNTZzcDM4NkpyUW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDA3NDEzMzE1MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMwMDM2MDA2MDg0QTI3OUM4Q0JGRUMzMzBDMjEzMDRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjQ3MzgyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzQxMzMxNTMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNTI3OUYyM0ZDRTI5RTYxRTE2REJEMzRCNUZCNUY3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI0NzM4MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTUg2WDJqeTVRV3lRaUdlVzFnYkltUVwiLFxuICBcInBob25lSWRcIjogXCIxNzQ5MzVmOS02Yjc1LTRkMjUtYWNhZS1kNDc1YjQyNmM2YWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjExLFxuICAgICAgMTE1LFxuICAgICAgODMsXG4gICAgICAyMzksXG4gICAgICA5NSxcbiAgICAgIDE1NCxcbiAgICAgIDg0LFxuICAgICAgMTA5LFxuICAgICAgMTIxLFxuICAgICAgNTQsXG4gICAgICAyMTEsXG4gICAgICAyMDksXG4gICAgICA5MixcbiAgICAgIDIzMixcbiAgICAgIDIwNSxcbiAgICAgIDE3NSxcbiAgICAgIDE2OSxcbiAgICAgIDIxNCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAyMjQsXG4gICAgICAyNDcsXG4gICAgICAxNDYsXG4gICAgICAyMjYsXG4gICAgICAxOTEsXG4gICAgICAyNDcsXG4gICAgICAxNDksXG4gICAgICAyMTQsXG4gICAgICA5LFxuICAgICAgMTI2LFxuICAgICAgMTgwLFxuICAgICAgODEsXG4gICAgICA5MyxcbiAgICAgIDU3LFxuICAgICAgMTQwLFxuICAgICAgMTM3LFxuICAgICAgMTE4LFxuICAgICAgMjQ1LFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFRCRjJKQzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQwNzQxMzMxNTMwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5vbnltb3VzXCIsXG4gICAgXCJsaWRcIjogXCIxNDg3Njk1OTcyOTY4Mjk6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUtabjVzQ0VOem5qYm9HR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGL3Nqb0tFWWlBRlEvVCt3ZlRQWFNVSURFMmdZa1hRT2VBRVRrVjM0cFdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9naFYxNzMyKzR4enhTUFJweFM2bHhWQ2FKQ1I0T1hpZjdQR1lsRnM1OVlKNEVxY1FHcWVRUE9BMFRHZ0w2Q0NnNXU4U0lJbDlZZjRZS1Y4U3JRYUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjl2R3FGYmNwYUM3eHA5YlY3YjNJQ2xGRi96dWUzbnNtdmxQL0hVN2tLSnJOcC9ucG8wOFd4ZE9VakRsd3ZXSUdTVkR4NldLZWJHc1M5RitIM05tQWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQwNzQxMzMxNTMwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0NzM4MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDdFRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN0VC5qc29uIjogIntcImtleURhdGFcIjpcImowazVzMU9FNU9ZQmQwckR4RktFOEtkNVMrMG1RbU1pRTJrVlhSN2I2Vnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTk0MDA1MTg2LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
