# Networking Project: Secure & Optimized Website

## Overview
This repository contains the **Networking Project Website**, enhanced with **security, performance optimizations, and monitoring features**. The project is deployed on **GitHub Pages** and includes configurations for **Cloudflare CDN and Supabase**.

## Features & Implementations
### **1. Security Enhancements**
- **HTTPS Enforcement:** GitHub Pages automatically enforces HTTPS.
- **Google reCAPTCHA:** Protects against brute-force attacks in login forms.
- **SQL Injection (SQLi) & XSS Protection:**
  - Used **DOMPurify** to sanitize user input and prevent XSS.
  - Used **parameterized queries** in Supabase to prevent SQLi.
- **CSRF Protection & Secure Sessions:**
  - Stored sessions securely with HTTP-only cookies.
  - Implemented CSRF tokens in forms.

### **2. Performance Optimizations**
- **Cloudflare CDN Integration** for faster content delivery.
- **Minified CSS & JavaScript** to improve load times.
- **Lazy Loading** implemented for images to reduce initial load times.
- **Caching & CDN Optimization** via Cloudflare and jsDelivr.

### **3. Deployment & Infrastructure**
- **GitHub Actions** for continuous integration and deployment (CI/CD).

### **4. Monitoring & Security Analysis**
- **Supabase API Monitoring** with authentication and logging.


## 📂 Project Structure
```
/networking-project
│── /public                  # Static files (if applicable)
│── /src                     # Source code
│── /config                  # Configuration files
│   ├── database.sql         # Supabase Database Schema
│── /docs                    # Documentation & Screenshots
│   ├── TECHNICAL_REPORT.md  # Markdown version of the technical report
│   ├── screenshots/         # Screenshots of implemented features
│── .github/workflows        # GitHub Actions for CI/CD
│   ├── deploy.yml           # Deployment workflow
│── README.md                # Deployment instructions
│── index.html               # Main website file
│── style.min.css                # Minified styles
│── script.min.js                # Minified JavaScript
```

---

## 🛠 Deployment Instructions

### **🔹 Running Locally**
1. **Clone the repository:**
   ```sh
   git clone https://github.com/silviaraghav/networking-project.git
   cd networking-project
   ```
2. **Start a local server:**
   ```sh
   npx http-server .
   ```

### **🔹 Deploying on GitHub Pages**
1. Push changes to **`main` branch**.
2. Go to **GitHub Pages settings** → Select `main` branch → Enable deployment.

### **🔹 Cloudflare CDN Integration**
1. **Sign up on [Cloudflare](https://www.cloudflare.com/)**.
2. **Add `yourusername.github.io` as a site**.
3. **Enable Cloudflare Caching:**
   - Go to **Rules → Cache Rules**.
   - Click **Create Cache Rule**.
   - **Set If URL matches:** `yourusername.github.io/*`
   - **Edge Cache TTL:** 1 month
   - **Cache Level:** Cache Everything
   - Click **Save and Deploy**.

### **🔹 Use jsDelivr CDN for Faster Asset Delivery**
1. Replace local file paths in `index.html`:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yourusername/networking-project@main/style.css">
   <script src="https://cdn.jsdelivr.net/gh/yourusername/networking-project@main/script.js"></script>
   ```
---

##  Security & Performance Testing
### **Security Checks**
- **XSS & SQLi Protection:** DOMPurify sanitization & Supabase policies.
- **API Security:** Used Supabase **Row Level Security (RLS)**.
- **Bot Prevention:** reCAPTCHA implementation logs blocked attempts.

### **Performance Metrics**
- **Page Load Time Reduced:** From **3.2s to 1.8s**.
- **Cloudflare & jsDelivr enabled for fast content delivery.**


---

## 🤝 Contributors
- **Silvia Juyal**



---

## 🔗 Resources
- [GitHub Pages Documentation](https://pages.github.com/)
- [Cloudflare CDN](https://www.cloudflare.com/)
- [jsDelivr CDN](https://www.jsdelivr.com/)
- [Google reCAPTCHA](https://www.google.com/recaptcha/about/)
- [Supabase Documentation](https://supabase.com/docs)

 *This project ensures a **secure, optimized, and scalable** networking website!*
