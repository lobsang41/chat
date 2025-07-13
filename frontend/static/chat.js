function sendMessage() {
    const msgInput = document.getElementById('message');
    const msg = msgInput.value.trim();
    if (!msg) return;

    const chatWindow = document.getElementById('chat-window');
    const userMsg = document.createElement('div');
    userMsg.textContent = msg;
    chatWindow.appendChild(userMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.textContent = 'Echo: ' + msg;
        chatWindow.appendChild(botMsg);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 500);

    msgInput.value = '';
}