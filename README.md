# Frontend Developer Portfolio

A clean, modern, and professional single-page portfolio built for a fresher
Frontend Developer to showcase during interviews. Built with **React +
Bootstrap 5 + Bootstrap Icons + Custom CSS** — no UI component libraries, no
TypeScript, no Next.js.

## ✨ Features

- Clean, minimal, professional design (navy & blue palette)
- Fully responsive — mobile, tablet, laptop, desktop
- Smooth scrolling navigation with a mobile menu
- Subtle scroll-triggered fade-in animations (respects `prefers-reduced-motion`)
- Sections: Home, About, Skills, Projects, Education, Certifications, Contact
- Working contact **form UI** (frontend only — see note below)
- 100% configurable through a single data file, no need to touch components

## 🛠 Tech Stack

- React 19 (Functional Components + Hooks)
- Vite (build tool)
- Bootstrap 5 (layout & grid)
- Bootstrap Icons
- Custom CSS (CSS variables / design tokens)

## 📁 Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillBadge.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   └── Reveal.jsx        # Shared scroll fade-in wrapper
│   ├── data/
│   │   └── portfolioData.js  # ⭐ EDIT THIS FILE TO CUSTOMIZE EVERYTHING
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Design tokens + custom styling
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### 3. Build for production

```bash
npm run build
```

The production-ready static files will be generated inside the `dist/` folder.
You can deploy this folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

### 4. Preview the production build locally

```bash
npm run preview
```

## ✏️ How to Customize (No Component Editing Needed)

All editable content lives in **one single file**:

```
src/data/portfolioData.js
```

Simply replace the placeholder values (e.g. `{{NAME}}`, `{{ROLE}}`,
`{{EMAIL}}`) with your real information. The entire site updates
automatically — no need to touch any component code.

You can edit:

| Section          | What to change                                                |
|-------------------|----------------------------------------------------------------|
| `personal`        | Name, role, short bio, email, phone, location, resume link    |
| `socials`         | LinkedIn and GitHub URLs                                      |
| `about`           | Your "About Me" paragraph                                     |
| `skills`          | Frontend / Languages / Tools / Backend skill lists             |
| `projects`        | Add/remove project objects (image, description, links, etc.)  |
| `education`       | Add/remove education entries                                   |
| `certifications`  | Add/remove certification entries                                |

### Adding a new project

Just add a new object to the `projects` array in `portfolioData.js`:

```js
{
  id: 4,
  name: "My New Project",
  image: "https://your-image-url.com/screenshot.png",
  description: "A short description of what this project does.",
  technologies: ["React", "Bootstrap"],
  githubLink: "https://github.com/yourusername/repo",
  liveLink: "https://your-live-demo.com",
}
```

The `Projects` component automatically renders it — no other code changes needed.

### Replacing the profile image

Update `personal.profileImage` in `portfolioData.js` with a direct image URL,
or place an image inside `src/assets/` and import it into the data file.

## 📬 Note on the Contact Form

The contact form is fully built and functional on the frontend (validates
inputs and shows a success message), but it does **not** send real emails out
of the box since there is no backend included. To make it fully functional,
connect it to a service such as:

- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- Your own backend API (Node/Express, etc.)

The submit handler is in `src/components/Contact.jsx` (`handleSubmit`
function) — this is the only place you'll need to add the integration code.

## 📱 Responsiveness

The layout uses Bootstrap's grid system combined with custom CSS media
queries, and has been designed to work smoothly across:

- Mobile phones
- Tablets
- Laptops
- Large desktop screens

## 📄 License

Free to use and customize for your personal portfolio.
"# My-Portfolio" 
