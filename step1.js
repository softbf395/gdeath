const usernameInput = document.getElementById("usernameInput");
const startBtn = document.getElementById("startBtn");
const messageDiv = document.getElementById("message");

startBtn.addEventListener("click", async () => {
    const username = usernameInput.value.trim();
    
    if (!username) {
        messageDiv.textContent = "Please enter your Roblox username.";
        return;
    }
    
    try {
        // Send username to the server to log it and start the process
        const response = await fetch('/start_gift_process', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });

        if (response.ok) {
            localStorage.setItem('redirectData', 'step2'); // Save special redirect data
            window.location.href = 'step2.html'; // Redirect to the next step
        } else {
            messageDiv.textContent = "Error starting the process. Try again.";
        }
    } catch (err) {
        console.error(err);
        messageDiv.textContent = "An error occurred. Try again later.";
    }
});
