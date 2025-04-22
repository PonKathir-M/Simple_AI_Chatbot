const inputField = document.querySelector('.user-input');
const sendButton = document.querySelector('.send-button');
const chatMessages = document.querySelector('.chat-messages');

// Predefined responses
const responses = {
    "hi": "Hey there! 👋 Ready to chat?",
    "hello": "Hello! 😄 What’s on your mind?",
    "how are you": "I'm running smoothly ⚙️ Hope you're doing great too!",
    "what is your name": "I'm your friendly AI buddy 🤖",
    "bye": "See you soon! 👋 Stay awesome!",
    "who made you": "A cool developer like you 👨‍💻",
    "thank you": "You're most welcome! 😊",
    "tell me a joke": "Why don’t robots panic? Because they have nerves of steel! 😂",
    "what can you do": "I can answer questions, tell jokes, and make your day better! 💬",
    "good morning": "Good morning! 🌞 Let's make today awesome!",
    "good night": "Sweet dreams! 🌙 Don’t let the bugs bite (coding bugs 😅)",
    "i love you": "Aww! I’m flattered ❤️ I’m all yours digitally 😄"
};


sendButton.addEventListener('click', () => {
    const userMessage = inputField.value.trim().toLowerCase();
    if (userMessage === '') return;

    addMessage(userMessage, 'user-message');
    inputField.value = '';

    // Choose response or default
    const botReply = responses[userMessage] || "Sorry, I don't understand that yet.";
    setTimeout(() => {
        addMessage(botReply, 'bot-message');
    }, 500);
});

function addMessage(text, className) {
    const msg = document.createElement('div');
    msg.classList.add('message', className);
    msg.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
