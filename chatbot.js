const chatbox = document.getElementById('chatbox');

let selectedQuestion = null;

const questions = [
  "What is JavaScript?",
  "How does CSS work?",
  "What is HTML?"
];

const followUpQuestions = {
  "What is JavaScript?": [
    "What is a variable in JavaScript?",
    "How do functions work in JavaScript?"
  ],
  "How does CSS work?": [
    "What are CSS selectors?",
    "How do you style elements in CSS?"
  ],
  "What is HTML?": [
    "What are HTML tags?",
    "How do you structure a webpage with HTML?"
  ]
};

const answers = {
  "What is a variable in JavaScript?": "A variable in JavaScript is a container for storing data values.",
  "How do functions work in JavaScript?": "Functions in JavaScript are blocks of code designed to perform a task and are executed when called.",
  "What are CSS selectors?": "CSS selectors are patterns used to select the elements you want to style.",
  "How do you style elements in CSS?": "You style elements in CSS by applying properties like color, font-size, and margin.",
  "What are HTML tags?": "HTML tags are the building blocks of HTML, used to structure content on a webpage.",
  "How do you structure a webpage with HTML?": "A webpage is structured with HTML using a combination of elements like headings, paragraphs, and divs."
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
