# critical.su website

[![critical.su](https://img.shields.io/badge/Critical.su-212121?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMTlsLTctNyA3LTcgNyA3LTcgN3oiPjwvcGF0aD48L3N2Zz4=&labelColor=FF0000)](https://critical.su)
![critical.su screenshot](images/critical.png)


A modern, stylish landing page for critical.su

## 🚀 Tech Stack

<div align="left">
  <img src="https://img.shields.io/badge/Astro-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
</div>

## 📝 Project Overview

This repository contains the source code for the critical.su website. The site is built with modern web technologies to provide a fast, responsive user experience.

## ✨ Features

- Fast, static site generation with Astro
- Responsive design with TailwindCSS
- Interactive components powered by React
- Content management through MDX files

## 🗂️ Project Structure

```
critical.su/
├── public/           # Static assets
├── src/
│   ├── components/   # React & Astro components
│   ├── content/
│   │   └── posts/    # MDX blog posts
│   ├── layouts/      # Page layouts
│   └── pages/        # Page components
├── .env              # Environment variables
└── astro.config.mjs  # Astro configuration
```

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/vmilfe/critical.su.git
cd critical.su
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm run dev
```

## 🚧 Future Development Plans

- Enhance video and audio controller functionality
- Implement proper API for view tracking
- Configure MongoDB connection and server settings

## 📊 Content Management

Posts are stored as MDX files in the `src/content/posts` directory. Example post:

```mdx
---
id: 2
title: this fist page completed! :\\
createDate: 2025-03-05T21:31:50
postTitle: wtf, critical search a work again?
blureBackground: true
---

# My Amazing Post

This is the content of my post.
```

## 📫 Contact

<div align="left">
  <a href="https://t.me/awixa">
    <img src="https://img.shields.io/badge/Telegram-@awixa-26A5E4?style=flat-square&logo=telegram&logoColor=white&labelColor=20232a" alt="Telegram" />
  </a>
  <a href="https://critical.su">
    <img src="https://img.shields.io/badge/Website-critical.su-FF0000?style=flat-square&labelColor=20232a" alt="Website" />
  </a>
</div>

---

<p align="center">
  Made with ♥️ by <a href="https://t.me/awixa">@awixa</a>
</p>
