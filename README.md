


# Personal Portfolio Website

A sleek, responsive, and modern personal portfolio website designed to showcase projects, skills, and experiences. Built using React, TypeScript, Vite, and Tailwind CSS, featuring smooth scroll animations and an interactive user experience.

🔗 **Live Link:** [personal-portfolio-website-alpha-five.vercel.app](https://personal-portfolio-website-alpha-five.vercel.app)

---

## 🚀 Features

* **Modern UI/UX:** Clean, elegant design utilizing Tailwind CSS for styling.
* **Component-Driven Architecture:** Modular structure with dedicated sections for Hero, About, Services, Work (Portfolio), and Contact.
* **Smooth Animations:** Dynamic scroll-triggered animations powered by a custom Intersection Observer hook (`useInView`).
* **Fully Responsive:** Optimized for a seamless experience across mobile, tablet, and desktop devices.
* **Type Safety:** Built with TypeScript to ensure robust, self-documenting code.
* **Fast Development & Bundling:** Powered by Vite for lightning-fast Hot Module Replacement (HMR) and optimized production builds.

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript
* **Styling:** Tailwind CSS, PostCSS
* **Build Tool:** Vite
* **Configuration:** TypeScript configurations (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`)

---

## 📁 File Structure

```text
├── public/                 # Static assets (Favicon, logos, images)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.tsx       # About Me section
│   │   ├── Contact.tsx     # Contact form/details section
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Hero.tsx        # Hero/Landing section
│   │   ├── Navbar.tsx      # Navigation component with mobile toggle
│   │   ├── Services.tsx    # Services offered section
│   │   ├── Work.tsx        # Portfolio projects grid
│   │   ├── ScrollToTop.tsx # Floating back-to-top button
│   │   └── AnimatedSection.tsx # Wrapper component for scroll animations
│   ├── data/
│   │   └── portfolio.ts    # Centralized data store for projects, services, etc.
│   ├── hooks/
│   │   └── useInView.ts    # Custom React hook utilizing Intersection Observer API
│   ├── App.tsx             # Root application component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles and Tailwind directives
├── tailwind.config.js      # Tailwind customization
├── vite.config.ts          # Vite bundling settings
└── package.json            # Dependencies and scripts

```

---

## ⚙️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have **Node.js** (v16 or higher recommended) and **npm** installed.

### Installation

1. **Clone the repository:**

```bash
   git clone [https://github.com/your-username/Personal-Portfolio-Website.git](https://github.com/your-username/Personal-Portfolio-Website.git)
   cd Personal-Portfolio-Website

```

2. **Install dependencies:**

```bash
   npm install

```

### Running Locally

To launch the development server, run:

```bash
npm run dev

```

Open your browser and navigate to the local URL displayed in the terminal (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build:

```bash
npm run build

```

The output files will be generated inside the `dist/` directory, ready to be hosted on platforms like Vercel, Netlify, or GitHub Pages.

---

## 🤝 Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Support

If you like this project, found it useful, or want to use it as a template for your own portfolio, please consider giving it a **Star**! Your support is highly appreciated. ⭐

---

## 📄 License

This project is licensed under the terms specified in the [LICENSE](https://www.google.com/search?q=LICENSE) file.

```

```
