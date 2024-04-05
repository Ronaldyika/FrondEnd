let bearerToken = '';
let tokenExpiration = 0;

// Function to fetch the initial bearer token
async function fetchBearerToken() {
    try {
        const response = await fetch("https://sandbox.momodeveloper.mtn.com/collection/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'Ocp-Apim-Subscription-Key': 'b6db761880fd48c689f8cf547c574afb',
                'Authorization': 'Basic ZDMzYmFlZDktNjA0Ni00OTEzLWIxOGEtMjAzMGQzNmY4ZWFhOmQ2MWVjMGUwOTQ3NzRlNTdhYThmMGVkMjNlMTc4ZDJj'
            }),
            mode:"no-cors"
        });
        const data = await response.text();
        // const data = await response.json();
        // bearerToken = data.access_token;
        bearerToken = data.access_token;
        tokenExpiration = Date.now() + (data.expires_in * 1000);
        console.log(bearerToken);
    } catch (error) {
        console.error('Error fetching bearer token:', error);
    }
}

// Function to check if the bearer token is expired
function isTokenExpired() {
    return Date.now() >= tokenExpiration;
}

// Function to refresh the bearer token
async function refreshBearerToken() {
    await fetchBearerToken(); // Fetch a new bearer token
}

document.getElementById('paymentForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission
    let phoneNumber = document.getElementById('phoneNumber').value;
    let amount = document.getElementById('amount').value;

    function generateExternalId() {
        const min = 100000; // Minimum value (6 digits)
        const max = 999999; // Maximum value (6 digits)
        const externalId = Math.floor(Math.random() * (max - min + 1)) + min;
        return externalId.toString(); // Convert to string
    }
  
    const externalId = generateExternalId();

    function generateUUID() {
        var uuid = '', i, random;
    
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : i === 16 ? (random & 3 | 8) : random).toString(16);
        }
    
        return uuid;
    }
  
    const xReferenceId = generateUUID();

    // Check if the token is expired or close to expiration
    if (isTokenExpired()) {
        await refreshBearerToken(); // Refresh the token if it's expired
    }

    try {
        const response = await fetch('https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Ocp-Apim-Subscription-Key': 'b6db761880fd48c689f8cf547c574afb',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "amount": amount,
                "currency": "EUR",
                "externalId": externalId,
                "payer": {
                    "partyIdType": "MSISDN",
                    "partyId": phoneNumber
                },
                "payerMessage": "Payment for product",
                "payeeNote": "Your payment note"
            }),
            mode:"no-cors"
        });
        const data = await response.text();
        if (data.statusCode === 202 || data.statusCode === 200) {
            alert('Payment successful!');
            // Redirect or perform any other action upon successful payment
        } else {
            const datainfo = response.json();
            alert('Payment failed. Please try again.' + datainfo.access_token);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});