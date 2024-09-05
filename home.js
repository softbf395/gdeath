const redeemBtn = document.getElementById("redeemBtn");
const giftCodeInput = document.getElementById("giftCodeInput");
const messageDiv = document.getElementById("message");

redeemBtn.addEventListener("click", async () => {
    const code = giftCodeInput.value.trim();
    
    if (!code) {
        messageDiv.textContent = "Please enter a gift code.";
        return;
    }
    
    // Send the gift code to the server to validate it
    try {
        const response = await fetch('/redeem_code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
        });

        const result = await response.json();
        
        if (result.valid) {
            window.location.href = 'download.html'; // Redirect to download page if valid
        } else {
            window.location.href = 'step1.html'; // Redirect to Step 1 if invalid
        }
    } catch (err) {
        console.error(err);
        messageDiv.textContent = "An error occurred. Try again later.";
    }
});
