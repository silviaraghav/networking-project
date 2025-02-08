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
