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

    // API URL to get domain records (ensure to use the correct domain)
    const url = `https://api.dnsimple.com/v2/domains/${domain}/records`;

    // Your DNSimple API token (replace with your own token)
    const apiToken = 'YOUR_API_TOKEN';

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiToken}`,  // API Authentication Token
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();  // Parse the JSON response
            }
            throw new Error('Failed to fetch data');
        })
        .then(data => {
            // Find the A record (IP address) in the data
            const aRecord = data.data.find(record => record.type === 'A');
            
            if (aRecord) {
                document.getElementById('ipAddress').textContent = `IP Address: ${aRecord.content}`;
            } else {
                document.getElementById('ipAddress').textContent = 'No A record found for the domain.';
            }
        })
        .catch(error => {
            // Handle errors and display appropriate message
            document.getElementById('ipAddress').textContent = `Error: ${error.message}`;
        });
}
