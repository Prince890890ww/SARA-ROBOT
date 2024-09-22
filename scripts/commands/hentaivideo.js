const axios = require('axios');
const fs = require('fs');

module.exports.config = {
    name: "hentaivideo", 
    version: "1.0.0", 
    permssion: 0, 
    premium: false,
    prefix: true,
    credits: "XANVIR",
    description: "SOME HENTAI VIDEO BY ( X2 SERVER)  FILE CREDITS TANVIR & DIPTO & NAYAN",
    category: "video", 
    usages: "/hentaivideo",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    try {
        const X2HAImageResponse = await axios.get('https://i.imgur.com/r9NPzwF.gif', { responseType: 'arraybuffer' });
        const X2HAmsG = await api.sendMessage({
            body: '✢━━━????????━━✢\n✢━━━??????????━━✢',
            attachment: X2HAImageResponse.data
        }, threadID);
      const rt = await axios.get("https://x2-video-api.onrender.com/hentaivideo")
      const url = rt.data.resultX2.data;
        const response = await axios.get(url, { responseType: "stream" });

        const videoPath = './hentai_video.mp4';
        const writer = fs.createWriteStream(videoPath);

        response.data.pipe(writer);

        writer.on('finish', () => {
            api.sendMessage({ body: "♻️--『SARA-ROBOT』--♻️", attachment: fs.createReadStream(videoPath) }, event.threadID);
        });

        writer.on('error', (err) => {
            console.error(err);
        });
    } catch (e) {
        console.log(e);
    }
};
