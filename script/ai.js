const axios = require('axios');

module.exports.config = {
		name: "Ai",
		version: 1.0,
		credits: "OtinXSandip",
		description: "AI",
		hasPrefix: false,
		usages: "{pn} [prompt]",
		aliases: ["gpt4"],
		cooldown: 0,
};

module.exports.run = async function ({ api, event, args }) {
		try {
				const prompt = args.join(" ");
				if (!prompt) {
						await api.sendMessage("𝔻𝕒𝕧𝕚𝕕 ✰.         je suis prêt pour tes répondre alors vas y 😕.", event.threadID);
						return;
				}

				const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
				const answer = response.data.answer;

				await api.sendMessage(answer, event.threadID);
		} catch (error) {
				console.error("Error:", error.message);
		}
};
