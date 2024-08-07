const botToken = "7247154710:AAGcYdYqeeBG4mvhgXVhYAvme-UkhjO_VCw";
const botLink = "https://t.me/pigtgbot";

export const sendMessage = (message) => {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '@your_channel_id',
            text: message
        })
    });
};
