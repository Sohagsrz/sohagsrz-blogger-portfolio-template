# sohagsrz-blogger-portfolio-template

[![Blogger](https://img.shields.io/badge/Blogger-Theme%20v3-orange?logo=blogger&logoColor=white)](https://blogger.com)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL%203D-black?logo=three.js)](https://threejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Author](https://img.shields.io/badge/Author-Md%20Sohag%20Islam%20(@sohagsrz)-6366f1)](https://sohag.xyz)

> A modern, cyberpunk/glassmorphism developer portfolio + technical blog theme designed for **Google Blogger (Blogspot)**, inspired by [sohagsrz.vercel.app](https://sohagsrz.vercel.app/).

---

## 🚀 Live Demo & Visual Highlights

- **Live Blog Demo**: [sohagsrz.blogspot.com](https://sohagsrz.blogspot.com/)
- **Original Portfolio Inspiration**: [sohagsrz.vercel.app](https://sohagsrz.vercel.app/)

### Key Features

- **🌐 3D Three.js Particle Wave Background**: Ambient WebGL canvas with sine wave undulation, color blending (indigo, cyan, pink), floating 3D stardust, and mouse/scroll responsiveness.
- **⚡ Seamless Blogger CMS Integration**:
  - **Homepage (`data:view.isHomepage`)**: Displays the full developer portfolio (Hero, About, Gallery, Packagist SDKs, Featured Projects, Tech Stack, Terminal, and Latest Articles).
  - **Single Post Reader View (`data:view.isPost`)**: Clean typography, syntax-highlighted code blocks, responsive images, blockquotes, social share buttons (X, LinkedIn, Facebook, Copy link), author profile card, and next/prev post pagination.
  - **Blogger Comments System**: Full support for threaded comments, author avatars, and Google's embedded comment editor iframe (`BLOG_CMT_createIframe`).
  - **Search & Archive Views (`data:view.isSearch` / `data:view.isArchive`)**: Keyword search bar, tag filtering, and pagination.
  - **Custom 404 Error View (`data:view.isError`)**: Styled error screen with a return link.
- **💻 Interactive Developer Terminal**: Working in-browser terminal emulator supporting commands (`whoami`, `skills`, `packages`, `projects`, `social`, `blog`, `contact`, `clear`, `date`, `sudo`).
- **📦 Packagist Libraries Showcase**: One-click copyable `composer require` commands with clipboard toast notifications.
- **🎯 Filterable Project Matrix**: Interactive category filtering for AI & Agents, Web & Backend, Hardware & FPV, and Security/CTF.
- **🎨 100% Customizable**: Edit your name, bio, photo, social links, colors, and background images directly from Blogger's dashboard without touching code!

---

## 🛠️ Installation Guide

1. Download or clone this repository:
   ```bash
   git clone https://github.com/Sohagsrz/sohagsrz-blogger-portfolio-template.git
   ```
2. Log into your [Blogger Dashboard](https://www.blogger.com).
3. Navigate to **Theme** in the left sidebar.
4. Click the down arrow next to the orange **Customize** button and choose **Restore**.
5. Click **Upload** and select [`blogger-theme-sohagsrz.xml`](./blogger-theme-sohagsrz.xml) (or [`theme-6138198487133513801.xml`](./theme-6138198487133513801.xml)).
6. Once the theme is restored, open your blog URL to see your new portfolio and blog live!

---

## ⚙️ Customization (No Code Required)

### 1. Blogger Settings (`Settings -> Basic`)
- **Name / Brand**: Set your blog **Title** in Settings. It automatically updates your Name across the site (Navigation Logo, Hero Name, Author Box, and Footer).
- **Bio**: Set your blog **Description** in Settings. It automatically becomes your Bio across the Hero section and author cards.

### 2. Blogger Layout (`Layout` tab)
In the Blogger **Layout** editor, you will find ready-to-use widgets:

- **Profile Details (`Header1`)**:
  - Click **Edit** to upload your custom avatar/profile image directly from your computer or URL.
- **Social Profiles & Handles (`LinkList1`)**:
  - Click **Edit** to add, edit, or delete any social media links (GitHub, LinkedIn, X, YouTube, Discord, Telegram, Packagist, Website, Email).
  - The theme automatically assigns the matching FontAwesome icon and hover glow style!
- **Blog Posts (`Blog1`)**:
  - Configure the number of articles per page, date format, and comment settings.

### 3. Blogger Theme Designer (`Theme -> Customize`)
Open Blogger's visual Theme Designer to customize:
- **Background Image**: Fully applicable! Upload your own wallpaper or select Blogger pattern presets.
- **Primary Accent Color**: Change the primary glow color (default `#6366f1` Indigo).
- **Secondary Accent Color**: Change the secondary accent (default `#06b6d4` Cyan).
- **Pink Accent Color**: Change the pink accent (default `#ec4899`).
- **Dark Background Base**: Adjust the dark mode background shade (default `#060911`).

### 4. Advanced In-Code Config (`PORTFOLIO_CONFIG`)
For power users wanting to customize typewriter phrases, terminal commands, or toggle whole sections on/off:
Click **Theme -> Edit HTML** and edit the `window.PORTFOLIO_CONFIG` block at the top of `<body>`:

```javascript
window.PORTFOLIO_CONFIG = {
    name: "Your Name",
    handle: "@yourhandle",
    role: "Your Headline / Role",
    avatar: "https://your-avatar-url.jpg",
    statusBadge: "Available for Contract & Full-time Roles",
    bio: "Your developer bio...",
    email: "your-email@example.com",
    socials: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://x.com/yourusername",
        youtube: "https://youtube.com/@yourchannel",
        website: "https://yourwebsite.com"
    },
    typewriterPhrases: [
        "Full Stack Software Engineer ⚡",
        "AI & Autonomous Agents 🤖",
        "Open-Source Contributor 📦"
    ],
    features: {
        threeJsBackground: true, // 3D WebGL particle wave canvas
        aboutSection: true,      // Core Pillars (#about)
        gallerySection: true,    // Profiles & Hubs (#gallery)
        packagesSection: true,   // Packagist SDKs (#packages)
        projectsSection: true,   // Featured Projects (#projects)
        skillsSection: true,     // Tech Stack (#skills)
        terminalSection: true,   // Terminal Emulator (#terminal)
        blogSection: true,       // Articles Section (#blog)
        contactSection: true     // Contact Form (#contact)
    }
};
```

---

## 📁 Repository Structure

```
├── blogger-theme-sohagsrz.xml    # Complete, uploadable Blogger XML theme
├── theme-6138198487133513801.xml # Main theme file
├── preview.html                  # Standalone local preview of Homepage
├── preview-post.html             # Standalone local preview of Article view
├── generate_full_theme.js        # Theme generation build script
├── .gitignore                    # Git ignore file
└── README.md                     # Documentation & setup guide
```

---

## 👨‍💻 Author

**Md Sohag Islam (@sohagsrz)**
- Website: [sohag.xyz](https://sohag.xyz)
- Portfolio: [sohagsrz.vercel.app](https://sohagsrz.vercel.app/)
- GitHub: [@sohagsrz](https://github.com/sohagsrz)
- Packagist: [sohagsrz](https://packagist.org/packages/sohagsrz/)
- LinkedIn: [sohagsrz](https://linkedin.com/in/sohagsrz)
- X / Twitter: [@sohagsrz](https://x.com/sohagsrz)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
