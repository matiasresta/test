// chatbot_bundle/chatbot.js

(function() {
    const chatbotHTML = `
        <div class="chatbot-launcher" onclick="toggleChatbot()">
            <div class="chatbot-icon">+</div>
        </div>
        <div class="chatbot-interface" id="chatbotInterface">
            <div class="chatbot-header">
                <h4>Chatbot</h4>
            </div>
            <div class="chatbot-messages" id="chatbotMessages">
                <!-- Chat messages will appear here -->
            </div>
            <div class="chatbot-input-container">
                <input type="text" id="chatbotInput" placeholder="Type your message...">
                <button onclick="sendMessage()">Send</button>
            </div>
        </div>
    `;

    const chatbotCSS = `
        <style>
            /* Add your CSS styles here */
        </style>
    `;

    // Inject the HTML and CSS into the page
    document.body.innerHTML += chatbotHTML + chatbotCSS;

    // Your JavaScript code
    window.toggleChatbot = function() {
        const chatbotInterface = document.getElementById("chatbotInterface");
        chatbotInterface.style.display = chatbotInterface.style.display === "none" ? "flex" : "none";
    };
})();
