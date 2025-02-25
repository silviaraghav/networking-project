

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
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => img.setAttribute("loading", "lazy"));
});