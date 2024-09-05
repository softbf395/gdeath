// Initialize Supabase client
const SUPABASE_URL = 'https://umfhjmrkzsrscskmqugy.supabase.co/';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZmhqbXJrenNyc2Nza21xdWd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzODYxNTIsImV4cCI6MjA0MDk2MjE1Mn0.YSiQjUm85e84yFflphLch9wQ_G_uWhQ4z6SMhN-Wa_M';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('redeemBtn').addEventListener('click', async () => {
    const giftCode = document.getElementById('giftCodeInput').value;
    const messageDiv = document.getElementById('message');

    if (!giftCode) {
        messageDiv.textContent = 'Please enter a gift code.';
        return;
    }

    // Query the giftcodes table
    const { data, error } = await supabase
        .from('giftcodes')
        .select('*')
        .eq('code', giftCode)
        .single();

    if (error) {
        messageDiv.textContent = 'Error: ' + error.message;
    } else if (data) {
        messageDiv.textContent = 'Success! Code redeemed.';
        // Optionally, update the table to mark the code as used
        // await supabase.from('giftcodes').update({ redeemed: true }).eq('code', giftCode);
    } else {
        messageDiv.textContent = 'Invalid gift code.';
    }
});
