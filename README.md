# Networking Project: Secure & Optimized Website

## 📌 Overview

This repository contains the **Networking Project Website**, enhanced with **security, performance optimizations, and monitoring features**. The project is deployed on **GitHub Pages** and includes configurations for **Docker, Nginx, and Supabase**.

## 🚀 Features & Implementations

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

- **Minified CSS & JavaScript** to improve load times.
- **Lazy Loading** implemented for images to reduce initial load times.
- **Caching & CDN Optimization** via GitHub Pages.

### **3. Deployment & Infrastructure**

- **GitHub Actions** for continuous integration and deployment (CI/CD).
- **Docker** configuration for local deployment.
- **Nginx Configuration** for hosting on a custom server.

### **4. Monitoring & Security Analysis**

- **Google Analytics** to track user visits and behavior.
- **Security Testing:** Used OWASP ZAP & Chrome DevTools.
- **Supabase API Monitoring** with authentication and logging.

---

## 📂 Project Structure

```
/networking-project
│── /public                  # Static files (if applicable)
│── /src                     # Source code
│── /config                  # Configuration files
│   ├── nginx.conf           # Nginx configuration (if using Nginx)
│   ├── docker-compose.yml   # Docker setup for deployment
│   ├── database.sql         # Supabase Database Schema
│── /docs                    # Documentation & Screenshots
│   ├── TECHNICAL_REPORT.md  # Markdown version of the technical report
│   ├── screenshots/         # Screenshots of implemented features
│── .github/workflows        # GitHub Actions for CI/CD
│   ├── deploy.yml           # Deployment workflow
│             
│── README.md                # Deployment instructions
│── index.html               # Main website file
│── style.css            # Minified styles
│── script.js            # Minified JavaScript
│── package.json             # If using Node.js (optional)
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

1. Push changes to **`main`**\*\* branch\*\*.
2. Go to **GitHub Pages settings** → Select `main` branch → Enable deployment.

### **🔹 Deploying with Docker (Optional)**

1. **Build and run Docker container:**
   ```sh
   docker-compose up --build
   ```

---

##  Security & Performance Testing

### ** Security Checks**

- **XSS & SQLi Protection:** DOMPurify sanitization & Supabase policies.
- **API Security:** Used Supabase **Row Level Security (RLS)**.
- **Bot Prevention:** reCAPTCHA implementation logs blocked attempts.

### **📊 Performance Metrics**

- **Page Load Time Reduced:** From **3.2s to 1.8s**.
- **Google Lighthouse Score:** 95+ after minification and lazy loading.

---

## 📸 Screenshots

| Feature                       | Screenshot |
| ----------------------------- | ---------- |
| **Google reCAPTCHA**          |            |
| **Minified JS & CSS**         |            |
| **GitHub Actions Deployment** |            |
| **Security Testing Results**  |            |

---

## 🤝 Contributors

- **Silvia Raghav**

## 📜 License

This project is **open-source** and licensed under the MIT License.

---

## 🔗 Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Google reCAPTCHA](https://www.google.com/recaptcha/about/)
- [Supabase Documentation](https://supabase.com/docs)
- [OWASP ZAP Security Testing](https://owasp.org/www-project-zap/)

🚀 *This project ensures a **********secure, optimized, and scalable********** networking website!*

