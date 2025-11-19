const axios = require("axios");
const { cmd } = require("../command");

cmd({
    pattern: "sora",
    alias: ["soravideo", "txt2video", "genvid"],
    desc: "Generate AI video from text prompt using Okatsu AI",
    category: "ai",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        // Get prompt from user message or quoted text
        const rawText = q?.trim() ||
            m?.message?.conversation?.trim() ||
            m?.message?.extendedTextMessage?.text?.trim() ||
            m?.message?.imageMessage?.caption?.trim() ||
            m?.message?.videoMessage?.caption?.trim() || "";

        const quoted = m?.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        const quotedText = quoted?.conversation || quoted?.extendedTextMessage?.text || "";
        const input = rawText || quotedText;

        if (!input) return reply("🧠 Provide a prompt.\n\nExample: *.sora anime girl with blue hair*");

        // Call API
        const apiUrl = `https://okatsu-rolezapiiz.vercel.app/ai/txt2video?text=${encodeURIComponent(input)}`;
        const { data } = await axios.get(apiUrl, {
            timeout: 60000,
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        const videoUrl = data?.videoUrl || data?.result || data?.data?.videoUrl;
        if (!videoUrl) throw new Error("No videoUrl found in API response");

        // Send generated video
        await conn.sendMessage(from, {
            video: { url: videoUrl },
            mimetype: "video/mp4",
            caption: `🎥 *AI Video Generated!*\n\n📝 *Prompt:* ${input}`
        }, { quoted: mek });

    } catch (error) {
        console.error("[SORA CMD ERROR]", error?.message || error);
        reply("❌ Failed to generate video. Try again later.");
    }
});