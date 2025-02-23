// Function to resolve DNS
function resolveDNS() {
    const domain = document.getElementById('domain').value;

    // Check if the domain is entered
    if (!domain) {
        alert('Please enter a domain name');
        return;
    }

    // Display loading message while fetching
    document.getElementById('ipAddress').textContent = 'Resolving domain...';

    // API URL to get domain information
    const url = `https://networkcalc.com/api/dns/lookup/${domain}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();  // Parse the JSON response
            }
            throw new Error('Failed to fetch data');
        })
        .then(data => {
            // Display the resolved IP address from the API response
            if (data.records.A) {
                document.getElementById('ipAddress').textContent = `IP Address: ${data.records.A[0].address}`;
            } else {
                document.getElementById('ipAddress').textContent = 'No IP address found for the domain.';
            }
        })
        .catch(error => {
            // Handle errors and display appropriate message
            document.getElementById('ipAddress').textContent = `Error: ${error.message}`;
        });
}
