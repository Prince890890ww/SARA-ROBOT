module.exports.config = {
	name: "admin",
	version: "1.0.1", 
	permssion: 0,
  premium: false,
  prefix: true,
	credits: "ALVI",
	description: "Admin info",
	category: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://imgur.com/a/8g96rmA", 
            
            "https://imgur.com/a/8g96rmA", 
            
"https://imgur.com/a/8g96rmA",
            
            "https://imgur.com/a/8g96rmA"];
  
var callback = () => api.sendMessage({body:`🌻-𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥-🌻\n
------------------------------------------------\n🌺-𝗡𝗮𝗺𝗲-🌺       : SUJON BE'VIES\n🌐-𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸-🌐 : SUJON BE'VIES
PYTHON PROGRAMMER
WEB DEVELOPER
RECOVERY EXPERT
AM EDITOR
𝐅𝐄𝐄𝐋 𝐓𝐇𝐄 𝐏𝐎𝐖𝐄𝐑 𝐎𝐅
𝐘𝐎𝐔'𝐑 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐀𝐃\n💚-𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻-💚    : (𝗜𝘀𝗹𝗮𝗺)\n🌸-𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀-🌸 : (KHULNA)\n🌿-𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀-🌿 :(KHULNA)\n🔥-𝗚𝗲𝗻𝗱𝗲𝗿-🔥     : (𝗠𝗮𝗹𝗲)\n♻️-𝗔𝗴𝗲-♻️            :  20\n🔰-𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽-🔰 : (MARRIED)\n✴️-𝗪𝗼𝗿𝗸-✴️         : FREELANCING\n📩-𝗚𝗺𝗮𝗶𝗹-📩        :  mrsladen2m@gmail.com\n❇️-𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽-❇️ :  wa.me/+8801885263191\n♀️-𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺-♀️  : t.me/sujonbevies\n-🌼𝗙𝗯 𝗹𝗶𝗻𝗸-🌼   : https://www.facebook.com/61561264605347
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
