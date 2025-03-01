
//Database Supabase
const SUPABASE_URL = "https://nvmtcxcztcqyctbayrqy.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bXRjeGN6dGNxeWN0YmF5cnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2ODEzNDEsImV4cCI6MjA1NjI1NzM0MX0.7SVGb2S1aAsH-3ttjun8-Eg2PViWJhlKP5spMYUddjw";  

async function resolveDNS() {
    let domain = document.getElementById("domain").value.trim();

    if (!domain) {
        alert("Please enter a domain name");
        return;
    }
 
    const sanitizedDomain = domain.replace(/[^a-zA-Z0-9.-]/g, "");

    if (!sanitizedDomain) {
        alert("Invalid domain name.");
        return;
    }

    document.getElementById("ipAddress").textContent = "Resolving domain...";

    try {
        const response = await fetch(`https://networkcalc.com/api/dns/lookup/${sanitizedDomain}`);
        
        if (!response.ok) throw new Error("Failed to fetch data");
        

        const data = await response.json();
        if (data.records && data.records.A && data.records.A.length > 0) {
            const ip = data.records.A[0].address;
            document.getElementById("ipAddress").textContent = `IP Address: ${ip}`;

            // Save to Supabase
            await fetch(`${SUPABASE_URL}/rest/v1/dns_queries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_KEY,
                    "Authorization": `Bearer ${SUPABASE_KEY}`,
                },
                body: JSON.stringify({ domain: sanitizedDomain, ip_address: ip }),
                mode: "cors" // Ensure Cross-Origin requests are allowed
            });

            console.log("✅ DNS Query Saved to Supabase!");
        } else {
            document.getElementById("ipAddress").textContent = "No IP address found for the domain.";
        }
    } catch (error) {
        console.error("❌ Error:", error);
        document.getElementById("ipAddress").textContent = `Error: ${error.message}`;
    }
    let cleanInput = DOMPurify.sanitize(domain);
}

//Captcha Success
function captchaSuccess() {
    console.log("✅ reCAPTCHA verified successfully!");
}


// Session Management: Set a session cookie if it doesn't exist
function setSessionCookie() {
    if (!document.cookie.split('; ').find(row => row.startsWith('userSession='))) {
        document.cookie = "userSession=true; Secure; SameSite=Strict; max-age=3600"; // 1-hour session
        console.log("Session started!");
    }
}

// Check if session exists on page load
function checkSession() {
    const sessionExists = document.cookie.split('; ').find(row => row.startsWith('userSession='));
    if (sessionExists) {
        console.log("Session is active");
    } else {
        console.log("No active session");
    }
}

// Generate a CSRF token and store it in localStorage
function generateCSRFToken() {
    let csrfToken = localStorage.getItem('csrfToken');
    if (!csrfToken) {
        csrfToken = Math.random().toString(36).substring(2); // Generate a simple token
        localStorage.setItem('csrfToken', csrfToken);
    }
    return csrfToken;
}
console.log(localStorage.getItem('csrfToken'));


// Lazy loading for images
document.addEventListener("DOMContentLoaded", function() {
    setSessionCookie();  // Start session when page loads
    checkSession();  // Check session status
    generateCSRFToken();  // Generate CSRF token
    
    const images = document.querySelectorAll("img");
    images.forEach(img => img.setAttribute("loading", "lazy"));
});

