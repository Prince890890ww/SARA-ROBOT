module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  permssion: 0,
  prefix: false,
  premium: false,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  category: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61561264605347","","") {
    var aid = ["61561264605347","",""];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস সুজন কই তুমি তোমারে এক বলদে ডাকে__😁🤣","Mantion_দিস না _বস সুজনের মন ভালো নেই আস্কে-!💔🥀","-আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭","বস সুজন এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মেনশন না দিয়া বস সুজন এর ইনবক্স এ যা😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না বস সুজন প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗","য়ামাল বস সুজন কে এতো ডাকো কেন😒, ভালো টালো বাসো নাকি🤭", "য়ামাল বস সুজন কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", " বস সুজন এখন অফিস এর কাজে বিজি আছে যা বলার আমাকে বলো🫣", "যা বলার আমাকে বলো য়ামাল বস সুজন এখন বিজি আছে🥰","বস সুজম কে আর একবার মেনশন দিলে তোমারে থাবরাইয়া মুতের কালার চেঞ্জ কইরা ফালামু 🤭🙈🤖"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
