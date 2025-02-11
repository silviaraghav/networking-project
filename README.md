# Computer Networking Project: Website Setup

## Overview

This project demonstrates how to set up a website and configure it using a hosting service with a custom or temporary domain. The website is designed using basic web technologies such as HTML, CSS, and JavaScript, while also showcasing networking concepts like DNS, IP addresses, and protocols.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Domain & Hosting Setup](#domain--hosting-setup)
3. [Website Setup](#website-setup)
4. [Networking Aspects](#networking-aspects)
5. [Steps for Implementation](#steps-for-implementation)
6. [Key Concepts](#key-concepts)
7. [Testing and Validation](#testing-and-validation)
8. [Acknowledgements](#acknowledgements)

---

## Project Overview

In this project, you will learn how to set up a simple website using basic HTML, CSS, and JavaScript. The website will demonstrate various networking concepts, including:

- Domain and Hosting Setup
- DNS Resolution
- IP Addressing (Static and Dynamic IPs)
- HTTPS (SSL/TLS) Configuration
- Network Troubleshooting (Ping and Traceroute)

---

## Domain & Hosting Setup

### Domain & Hosting

The first step in setting up your website is choosing a hosting service and a domain name. For simplicity, we recommend using GitHub Pages, as it provides free hosting for static websites. You can also use a temporary domain or purchase a custom domain from services like Namecheap, GoDaddy, etc.

- **Free Hosting Option**: GitHub Pages
- **Temporary Domain**: You can use free subdomains provided by GitHub Pages (e.g., `yourusername.github.io`).
- **Custom Domain**: You can purchase a domain and configure it to point to your GitHub Pages site.

**Steps for setting up GitHub Pages hosting:**
1. Create a repository on GitHub.
2. Push your website files (HTML, CSS, JavaScript) to the repository.
3. Go to the repository **Settings** > **Pages** and select the branch you want to deploy (usually `main`).
4. GitHub Pages will automatically host the site at `https://yourusername.github.io/yourrepository/`.

For custom domains:
- Purchase a domain from a domain registrar.
- Set up DNS records (A Record and CNAME) to point to GitHub Pages’ IP addresses.

### DNS Configuration for Custom Domains

If you decide to use a custom domain, you’ll need to configure DNS records. For GitHub Pages, the DNS records are as follows:
- **A Record**: Point the root domain (example.com) to the following IP addresses:
  185.199.108.153 185.199.109.153 185.199.110.153 185.199.111.153

- **CNAME Record**: For a subdomain like `www.example.com`, set the CNAME record to point to `yourusername.github.io`.

---

## Website Setup

### Basic Website Structure

To create a basic website, we will use HTML for the structure, CSS for styling, and JavaScript for interactive features. Here's a simple setup:

1. **HTML**: Define the basic structure of the webpage, including sections for DNS resolution and networking concepts.
2. **CSS**: Style the webpage to make it visually appealing.
3. **JavaScript**: Implement the DNS resolution functionality using an external API like `ip-api.com`.

## Networking Aspects
### Key Networking Concepts Demonstrated:
### DNS (Domain Name System):

The project uses a DNS resolution feature where a user can input a domain name and resolve it to its IP address using a public API (ip-api.com).
DNS records like A Records and CNAME Records are used to map domain names to IP addresses.
IP Addressing:

The website explains the concept of static and dynamic IP addresses.
The website itself is hosted on GitHub Pages, and users can learn how to map domain names to IP addresses.
Protocols (HTTP and HTTPS):

The website is accessible over HTTPS, ensuring secure communication.
HTTPS ensures that data is encrypted between the client and the server, protecting user privacy and preventing attacks.
Testing and Troubleshooting:

Users can test network connectivity using tools like Ping and Traceroute to verify the availability of the website from different locations.

## Steps for Implementation
### Set Up GitHub Pages: Follow the instructions above to create and deploy your website on GitHub Pages.
- **Add DNS Resolution:** Implement a JavaScript function to resolve domain names to IP addresses using an external API.
- **Configure DNS:** If using a custom domain, configure your DNS settings to point to GitHub Pages.
- **Enable HTTPS:** Make sure that your GitHub Pages site supports HTTPS by enabling it in the repository settings.

## Key Concepts**DNS (Domain Name System):** Translates human-readable domain names to machine-readable IP addresses.
- **A Record:** Maps a domain to an IP address (e.g., example.com to 192.168.1.1).
- **CNAME Record:** Maps a subdomain to another domain (e.g., www.example.com to example.com).
- **Static IP Address:** An IP address that doesn't change.
- **Dynamic IP Address:** An IP address that may change over time.
- **HTTPS (SSL/TLS):** Secure communication protocol that encrypts data between the client and server.

## Testing and Validation ##
### Testing Process
- Test web page with recent versions of Chrome, Firefox, and Safari for behavior and to confirm that site works across the mentioned browsers.
- Test the website on mobile devices to ensure that the layout was responsive and adjusted properly for smaller screens.
### Cross-Browser Testing
Test the website in the latest versions of Chrome, Firefox, and Safari to ensure that it functions correctly across different browsers.
Mobile Responsiveness
Test the website using different screen sizes and devices to ensure that it is fully responsive and user-friendly on mobile devices.
### Validation
Use W3C HTML Validator and CSS Validator to ensure that the code follows web standards and does not contain any errors or warnings.
![image](https://github.com/user-attachments/assets/c86e1899-c38c-4207-b5ec-a809e3d245f9)

## Acknowledgements
- GitHub Pages :for the free hosting and immediate deployment of the website.
- MDN Web Docs : has great documentation on HTML, CSS, and JavaScript .
- W3C Validator: to test my code to be compliant with proper web standards.
- networkcalc. free API for DNS resolver.
![image](https://github.com/user-attachments/assets/7a199ac4-fc0f-4a8d-9c29-ce60db982504)





