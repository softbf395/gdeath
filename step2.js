const checkObbyBtn = document.getElementById("checkObbyBtn");
const messageDiv = document.getElementById("message");

if (!localStorage.getItem('redirectData')) {
    window.location.href = 'home.html'; // Redirect to home if no redirect data
}

checkObbyBtn.addEventListener("click", async () => {
    try {
        // Check with the server if the user has completed the obby
        const response = await fetch('/check_obby_completion', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();
        
        if (result.beat_obby) {
            window.location.href = 'download.html'; // Redirect to download page if completed
        } else {
            messageDiv.textContent = "You haven't beaten the obby yet! Keep trying.";
        }
    } catch (err) {
        console.error(err);
        messageDiv.textContent = "An error occurred. Try again later.";
    }
});
