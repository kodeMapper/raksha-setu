function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Display user message
    addMessage(userInput, "user-message");

    // Generate bot response based on the user message
    handleBotResponse(userInput);
    
    // Clear input field after message is sent
    document.getElementById("user-input").value = "";
}

function handleBotResponse(userMessage) {
    let botResponse = "";

    // Convert user input to lowercase for case-insensitive matching
    const userInput = userMessage.toLowerCase();

    // Bot logic based on different keywords
    if (userInput.includes("help")) {
        botResponse = "I'm here to help. What problem are you facing?";
    } else if (userInput.includes("safety")) {
        botResponse = "Your safety is important. Please press the SOS button if you feel unsafe.";
    } else if (userInput.includes("emergency")) {
        botResponse = "In case of emergency, press the SOS button or call the nearest authorities. How can I assist you until then?";
    } else if (userInput.includes("advice")) {
        botResponse = "I'm here to offer advice. Are you looking for tips on personal safety, safety on the move, or something else?";
    } else if (userInput.includes("location")) {
        botResponse = "If you're in an unfamiliar area, I recommend activating your GPS for route suggestions. Would you like assistance with finding safe routes?";
    } else if (userInput.includes("fake call")) {
        botResponse = "Activating fake call support. Stay calm, and the call will be initiated shortly.";
    } else if (userInput.includes("check-in")) {
        botResponse = "Periodic safety check-ins can help ensure you're safe. Would you like me to remind you every few minutes to check in?";
    } else if (userInput.includes("buddy")) {
        botResponse = "Secure Buddy allows someone you trust to track your location for safety. Would you like to activate that now?";
    } else if (userInput.includes("language")) {
        botResponse = "I can help with live language translation if you encounter suspicious conversations. What language do you need help with?";
    } else if (userInput.includes("thanks") || userInput.includes("thank you")) {
        botResponse = "You're welcome! Remember, your safety is my priority. I'm here whenever you need help.";
    } else if (userInput.includes("route")) {
        botResponse = "I can suggest safer routes for your journey. Would you like me to provide suggestions based on your current location?";
    } else if (userInput.includes("password")) {
        botResponse = "For secure monitoring, you can enable password-protected tracking. Do you want to set that up?";
    } else if (userInput.includes("sos")) {
        botResponse = "If you're in danger, press the SOS button immediately. Stay calm and contact local authorities.";
    } else {
        botResponse = "I'm still learning. Let me connect you to a professional or provide further assistance.";
    }

    // Show bot's response after a delay (simulating thinking)
    setTimeout(() => {
        addMessage(botResponse, "bot-message");
    }, 1000);
}

function addMessage(text, className) {
    const chatBox = document.getElementById("chat-box");

    // Create message element
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;

    // Append message to chatbox
    chatBox.appendChild(messageElement);

    // Scroll to bottom of chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Make the chat container draggable
dragElement(document.getElementById("chat-container"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const header = document.getElementById("chat-header");

    if (header) {
        // If present, the header is where you move the DIV from
        header.onmousedown = dragMouseDown;
    } else {
        // Otherwise, move the DIV from anywhere inside the div
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when the mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Close button functionality
document.getElementById("close-chat").onclick = function() {
    document.getElementById("chat-container").style.display = "none";
};
