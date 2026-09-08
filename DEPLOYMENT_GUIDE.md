# Webspide - GitHub Hosting & Automatic Sync Guide

Your website and blog are hosted **100% on GitHub Pages**. You do not need any third-party hosting service.

---

## 1. How the Blog Works Across All Devices

- **Centralized Database (`blogs-data.js`)**: All published articles and categories live in `blogs-data.js`.
- **Universal Device Access**: Every visitor on an iPhone, Android phone, tablet, or laptop immediately loads all published blogs without needing browser cookies or local storage.
- **Automatic GitHub Sync**: When you publish or edit a blog in the Admin Panel (`blog-admin.html`), it commits directly to your GitHub repository in the background. Within 1–2 minutes, GitHub Pages updates and every device in the world sees the new post.

---

## 2. Setting Up 1-Click GitHub Auto-Sync (Takes 30 seconds)

To let your Admin Panel push directly to GitHub:

1. Go to **[GitHub.com](https://github.com/)** and log in.
2. Click your **profile picture** at the top-right &rarr; **Settings**.
3. In the left sidebar, scroll to the bottom and click **Developer settings**.
4. Click **Personal access tokens** &rarr; **Tokens (classic)**.
5. Click **Generate new token (classic)**:
   - Note: `Webspide Admin`
   - Check the **`repo`** checkbox (Full control of private/public repositories).
   - Click **Generate token**.
6. Copy the token (starts with `ghp_`).
7. In your Admin Panel (`blog-admin.html`), click the **GitHub Auto-Sync** button or go to **Settings** &rarr; **Configure GitHub Sync**.
8. Paste your token and click **Save & Sync Now**.

**Done!** Every time you write, edit, or delete a blog post, it will automatically sync to GitHub and go live for everyone on all devices.

---

## 3. Website Links

- **Live Website**: `https://azhar2006-collab.github.io/Webspideupdated/`
- **Blog Listing**: `https://azhar2006-collab.github.io/Webspideupdated/blog.html`
- **Admin Panel**: `https://azhar2006-collab.github.io/Webspideupdated/blog-admin.html`
