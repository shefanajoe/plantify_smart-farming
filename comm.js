// Handling the posting of community messages
document.getElementById('postBtn').addEventListener('click', function() {
    const postInput = document.getElementById('postInput');
    const postContent = postInput.value;

    if (postContent.trim() === "") {
        alert("Please enter a message before posting.");
        return;
    }

    // Create a new post element
    const postSection = document.querySelector('.posts');
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    
    const username = "CurrentUser"; // Change this to the logged-in user's name dynamically
    const currentDate = new Date().toLocaleDateString();
    
    newPost.innerHTML = `
        <h3>${username}</h3>
        <p>${postContent}</p>
        <p class="timestamp">Posted on: ${currentDate}</p>
    `;
    
    postSection.appendChild(newPost);

    // Clear the input field after posting
    postInput.value = "";
});
