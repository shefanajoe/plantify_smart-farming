const chatbox = document.getElementById('chatbox');

let selectedQuestion = null;

const questions = [
  "What are the best plants for beginners?",
  "How often should I water my plants?",
  "What type of soil is best for indoor plants?"
];

const followUpQuestions = {
  "What are the best plants for beginners?": [
    "What is a good indoor plant?",
    "Which plants are low-maintenance?"
  ],
  "How often should I water my plants?": [
    "How can I tell if a plant needs water?",
    "What is overwatering?"
  ],
  "What type of soil is best for indoor plants?": [
    "What is potting soil?",
    "Can I use garden soil for indoor plants?"
  ]
};

const answers = {
  "What is a good indoor plant?": "A good indoor plant for beginners is a snake plant or a pothos, as they are low-maintenance and tolerant of neglect.",
  "Which plants are low-maintenance?": "Low-maintenance plants include succulents, peace lilies, and ZZ plants.",
  "How can I tell if a plant needs water?": "You can check if the top inch of soil is dry; if it is, it's time to water your plant.",
  "What is overwatering?": "Overwatering is when a plant receives too much water, which can lead to root rot and other problems.",
  "What is potting soil?": "Potting soil is a soil mix specifically designed for potted plants, providing good drainage and nutrients.",
  "Can I use garden soil for indoor plants?": "It is not recommended to use garden soil for indoor plants, as it may contain pests and not provide adequate drainage."
};

// Initial greeting and first bubble for main questions
function initChatbot() {
  appendBotMessage("Hello! Please choose a question from the following:");
  showQuestionBubbles(questions, handleFirstBubbleClick);
}

// Append a message from the bot
function appendBotMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('bot-message');
  messageDiv.textContent = message;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the bottom
}

// Append a message from the user
function appendUserMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('user-message');
  messageDiv.textContent = message;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the bottom
}

// Display question bubbles (sent from bot)
function showQuestionBubbles(options, onClickHandler) {
  options.forEach(option => {
    const bubbleDiv = document.createElement('div');
    bubbleDiv.classList.add('bubble-message');
    bubbleDiv.textContent = option;
    bubbleDiv.addEventListener('click', function () {
      onClickHandler(option);
    });
    chatbox.appendChild(bubbleDiv);
  });
  chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the bottom
}

// Handle the first bubble click for selecting a main question
function handleFirstBubbleClick(selected) {
  appendUserMessage(selected);  // User selects the question
  selectedQuestion = selected;
  appendBotMessage("You selected: " + selectedQuestion);
  appendBotMessage("Here are some follow-up questions:");

  // Remove previous question bubbles and show follow-up question bubbles
  removePreviousBubbles();
  showQuestionBubbles(followUpQuestions[selectedQuestion], handleSecondBubbleClick);
}

// Handle the second bubble click for selecting a follow-up question
function handleSecondBubbleClick(selected) {
  appendUserMessage(selected);  // User selects the follow-up question
  appendBotMessage("You selected: " + selected);

  // Remove previous bubbles and show the final answer
  removePreviousBubbles();
  appendBotMessage(answers[selected]);

  // Reset for new conversation after a short delay
  setTimeout(() => {
    appendBotMessage("Would you like to ask something else? Restarting...");
    initChatbot(); // Restart the conversation
  }, 3000);
}

// Remove all bubbles after selection
function removePreviousBubbles() {
  const bubbles = document.querySelectorAll('.bubble-message');
  bubbles.forEach(bubble => bubble.remove());
}

// Start the chatbot
initChatbot();

