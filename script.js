function resolveDNS() {
    let domain = document.getElementById('domain').value.trim();

    if (!domain) {
        alert('Please enter a domain name');
        return;
    }

    // Allow only letters, numbers, dots, and hyphens
    const sanitizedDomain = domain.replace(/[^a-zA-Z0-9.-]/g, '');

    if (!sanitizedDomain) {
        alert('Invalid domain name.');
        return;
    }

    document.getElementById('ipAddress').textContent = 'Resolving domain...';
    

    fetch(`https://networkcalc.com/api/dns/lookup/${sanitizedDomain}`)

        .then(response => response.ok ? response.json() : Promise.reject('Failed to fetch data'))
        .then(data => {
            if (data.records && data.records.A && data.records.A.length > 0) {
                document.getElementById('ipAddress').textContent = `IP Address: ${data.records.A[0].address}`;
            } else {
                document.getElementById('ipAddress').textContent = 'No IP address found for the domain.';
            }
        })
        .catch(error => {
            document.getElementById('ipAddress').textContent = `Error: ${error}`;
        });
}
// //Lazy loading for images
// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll("img");
//     images.forEach(img => img.setAttribute("loading", "lazy"));
// });

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

