# Sri Balaji Interiors - React + Vite Rebuild

A modern, high-performance web application for **Sri Balaji Interiors**, rebuilt from static HTML into React 18 + Vite, featuring responsive Tailwind CSS layouts, Framer Motion transitions, dynamic category filtering, a masonry portfolio gallery, and an Express inquiry notifications backend.

---

## 🚀 Quick Start

### 1. Installation

In the project root directory, install all required dependencies:

```bash
npm install --legacy-peer-deps
```

### 2. Running Locally

#### Start the React Frontend

To launch the Vite development server (usually on `http://localhost:5173`):

```bash
npm run dev
```

#### Start the Express Backend

In a separate terminal window, start the lightweight Node.js/Express server (running on `http://localhost:5000`):

```bash
npm run server
```

---

## 📬 Email SMTP Configuration

The backend contact form uses Nodemailer to dispatch design consultations directly to the studio's email inbox.

1. Open the file `server/.env`.
2. Update the credentials using your Gmail account or specific SMTP server configurations:

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
RECIPIENT_EMAIL=sbinteriorschirra@gmail.com
```

> [!NOTE]
> If `EMAIL_USER` or `EMAIL_PASS` is left unconfigured, the backend runs in **mock mode**, printing the formatted form inquiry to the terminal console without throwing any errors. This allows seamless local testing without entering SMTP credentials.

---

## 🛠️ Production Build

To compile a minified production bundle under the `/dist` directory:

```bash
npm run build
```

To preview the built site locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
/sri-balaji-interiors
  /public
    /assets/images      <-- Root-relative images used by components
    robots.txt          <-- SEO robots definitions
    sitemap.xml         <-- Search-engine sitemap
  /src
    /assets/images      <-- Bundled source images
    /components         <-- Shared components (Navbar, Footer, Buttons, etc.)
    /data               <-- App database logs (portfolio, services, reviews)
    /pages              <-- App view router views (Home, Services, Contact, etc.)
    App.jsx             <-- Layout and Router configuration
    main.jsx            <-- React client mount entrypoint
    index.css           <-- Global styles & custom scrollbars
  /server
    server.js           <-- Express form handling server
    .env                <-- Server local env variables
  package.json          <-- Dependency controls
  tailwind.config.js    <-- Theme style colors and typography configuration
  vite.config.js        <-- Vite configuration
```

---

## 🎨 Design Colors (Tailwind System)

- **Ivory (`#FAF7F2`)** - Primary page background.
- **Blush (`#F5EDE3`)** - Secondary block background.
- **Mauve (`#C9A98A`)** - Border accents and highlight dividers.
- **Gold (`#C9A065`)** - Brand highlights, active links, and buttons.
- **Charcoal (`#2C2C2C`)** - Heavy typography and headers.
- **Taupe (`#7A6A5A`)** - Body paragraphs and secondary labels.
- **Sage (`#D4DDD1`)** - Form status logs and success banners.
- **Powderblue (`#B8CEDD`)** - Welcome badges and blog pills.
