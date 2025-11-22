# StuffingGuard

<div align="center">
  <img src="frontend/public/logo.svg" alt="StuffingGuard Logo" width="120" height="120">
  
  **Your Open-Source Tool to Check for Email or Password Leaks**
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Project Structure](#-project-structure)
- [Development Scripts](#-development-scripts)
- [How It Works](#-how-it-works)
- [Privacy & Security](#-privacy--security)
- [Contributing](#-contributing)
- [Release Cycle](#-release-cycle)
- [License](#-license)
- [Contact](#-contact)

---

## 🔍 Overview

**StuffingGuard** is a privacy-focused, open-source web application that allows users to check if their email addresses or passwords have been exposed in known data breaches. Built with modern web technologies, StuffingGuard prioritizes user privacy by never storing or logging any search queries.

In a world of data breaches, checking your security shouldn't require giving up more of your data. That's why StuffingGuard is fully transparent, open-source, and designed with privacy-first principles.

🌐 **Live Demo:** [Visit StuffingGuard](https://stuffingguard.vercel.app)

---

## ✨ Features

- **🔒 Privacy-First**: We never store or log your searches - every search is ephemeral
- **🔐 K-Anonymity Protection**: Password checks use k-anonymity hashing - only the first 5 characters of the hash are sent
- **� Client-Side Processing**: Queries are processed locally in your browser when possible
- **�📊 Real-Time Breach Data**: Check against known data breaches
- **🎨 Modern UI**: Clean, responsive design built with Next.js and Tailwind CSS
- **⚡ Fast & Lightweight**: Optimized for performance
- **🌐 Open Source**: Fully transparent codebase - inspect our code on GitHub
- **📱 Mobile-Friendly**: Responsive design works on all devices
- **🛡️ Security Tips**: Educational content about online security best practices
- **🔓 No Tracking**: No cookies, no IP logging, no third-party analytics
- **🏠 Self-Hostable**: Deploy your own instance for complete control
- **🔍 External Breach Databases**: Queries [Have I Been Pwned](https://haveibeenpwned.com/) for passwords and [XposedOrNot](https://xposedornot.com/) for emails with privacy protection

---

## 🛠️ Tech Stack

### Frontend

- **[Next.js 16.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling
- **[Zustand 5.0](https://zustand-demo.pmnd.rs/)** - State management
- **[Crypto-js 4.2](https://www.npmjs.com/package/crypto-js)** - Cryptographic functions
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools

- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher recommended)
- **npm** (v9.x or higher) or **yarn** or **pnpm**
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gitmhd/stuffingguard.git
   cd stuffingguard
   ```

2. **Navigate to the frontend directory**

   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload when you make changes. You may also see any lint errors in the console.

### Production Build

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

The optimized production build will be available at [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
StuffingGuard/
├── frontend/                    # Frontend Next.js application
│   ├── app/                    # Next.js App Router directory
│   │   ├── components/         # React components
│   │   │   ├── MainFooter.tsx
│   │   │   ├── NegativeResult.tsx
│   │   │   ├── PositiveResult.tsx
│   │   │   ├── ResultWrapper.tsx
│   │   │   ├── SearchPart.tsx
│   │   │   └── SecurityTips.tsx
│   │   ├── store/             # Zustand state management
│   │   │   └── useLeakStore.tsx
│   │   ├── utils/             # Utility functions
│   │   │   └── call.ts        # API call helper
│   │   ├── about/             # About page
│   │   │   └── page.tsx
│   │   ├── privacy/           # Privacy policy page
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── public/                # Static assets
│   │   ├── logo.svg
│   │   └── top-img.png
│   ├── eslint.config.mjs      # ESLint configuration
│   ├── next.config.ts         # Next.js configuration
│   ├── package.json           # Dependencies and scripts
│   ├── postcss.config.mjs     # PostCSS configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── README.md              # Frontend-specific README
├── LICENSE                     # MIT License
├── README.md                   # This file
├── STUFFINGGUARD_RELEASE_CYCLE.md
└── STUFFINGGUARD_TICKETING_GUIDELINES.md
```

---

## 📜 Development Scripts

All scripts should be run from the `frontend/` directory:

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Start development server at http://localhost:3000  |
| `npm run build` | Create an optimized production build               |
| `npm start`     | Start the production server (requires build first) |
| `npm run lint`  | Run ESLint to check for code issues                |

---

## 🔬 How It Works

StuffingGuard uses privacy-preserving techniques to check if your credentials have been compromised:

### Password Checking (K-Anonymity)

1. Your password is hashed locally in your browser using **SHA-1**
2. Only the **first 5 characters** of the hash are sent to the server (k-anonymity model)
3. The server queries **[Have I Been Pwned (HIBP)](https://haveibeenpwned.com/)** API with the partial hash
4. HIBP returns all hashes that start with those 5 characters
5. Your browser checks locally if your full hash is in the results
6. Your actual password **never leaves your device**
7. No record of your search is kept after you close the page

### Email Checking

1. Your email query is processed to check against breach databases
2. Queries **[XposedOrNot](https://xposedornot.com/)** API to check for known breaches
3. Results show which breaches (if any) your email appeared in
4. We do not store or log your email searches
5. The search is ephemeral - no trace remains on our systems

This approach ensures **maximum privacy** while still providing **accurate breach information** from trusted sources.

---

## 🔐 Privacy & Security

**We take your privacy seriously:**

- ✅ **No data storage**: We never store your searches or personal data
- ✅ **No logging**: Your queries are not logged anywhere
- ✅ **No tracking**: We don't track your IP address or browsing activity
- ✅ **No cookies**: We don't use cookies for tracking purposes
- ✅ **No third-party sharing**: We never share any data with third parties
- ✅ **HTTPS encryption**: All connections use HTTPS encryption
- ✅ **K-Anonymity**: Password checks use partial hash matching (only first 5 characters of hash sent)
- ✅ **Client-side hashing**: Passwords are hashed in your browser using SHA-1 before transmission
- ✅ **Open source**: Our entire codebase is publicly available for audit
- ✅ **Regular security audits**: Open-source code allows community security reviews
- ✅ **Ephemeral searches**: Every search is ephemeral and leaves no trace on our systems

### Self-Hosting

For maximum privacy and control, you can host StuffingGuard on your own infrastructure. This gives you complete control over your data and eliminates any dependency on external services. See the [Installation](#installation) section for setup instructions.

### Third-Party Services

StuffingGuard queries the following external breach databases to provide accurate results:

- **[Have I Been Pwned (HIBP)](https://haveibeenpwned.com/)** - For password breach checking using k-anonymity
- **[XposedOrNot](https://xposedornot.com/)** - For email breach checking

These services have their own privacy policies that we recommend you review. We implement privacy-preserving techniques like k-anonymity to minimize data exposure even to these services.

For complete privacy details, see our [Privacy Policy](https://stuffingguard.vercel.app/privacy) (last updated: November 22, 2025) and [About Page](https://stuffingguard.vercel.app/about).

---

## 🤝 Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, documentation improvements, or suggestions, your input is valuable.

### How to Contribute

1. **Fork the repository**

   ```bash
   git clone https://github.com/gitmhd/stuffingguard.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**

   - Write clean, maintainable code
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly

4. **Commit your changes**

   ```bash
   git commit -m "Add: your feature description"
   ```

   Use conventional commit messages:

   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Remove:` for removed features
   - `Docs:` for documentation changes

5. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Ensure all tests pass

### Ticketing Guidelines

When creating issues or tickets, please follow our [Ticketing Guidelines](STUFFINGGUARD_TICKETING_GUIDELINES.md):

- Use imperative mood in titles (e.g., "Fix header links", "Add email validation")
- Include clear descriptions with:
  - Summary
  - Steps to reproduce (for bugs)
  - Expected behavior
  - Acceptance criteria
  - Actual behavior (for bugs)
- Apply appropriate labels: `bug`, `feature`, `documentation`, `chore`, `urgent`

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

---

## 📅 Release Cycle

StuffingGuard follows a structured release cycle. For detailed information about our versioning, release schedule, and deployment process, see [STUFFINGGUARD_RELEASE_CYCLE.md](STUFFINGGUARD_RELEASE_CYCLE.md).

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Mouhammad Albissaty Saleh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📧 Contact

**Project Maintainer:** Mouhammad Albissaty Saleh

- **GitHub:** [@gitmhd](https://github.com/gitmhd)
- **Repository:** [stuffingguard](https://github.com/gitmhd/stuffingguard)

For bug reports and feature requests, please use the [GitHub Issues](https://github.com/gitmhd/stuffingguard/issues) page.

---

## 🌟 Support the Project

If you find StuffingGuard useful, please consider:

- ⭐ Starring the repository on GitHub
- 🐛 Reporting bugs and suggesting features
- 🔀 Contributing code or documentation
- 📢 Sharing the project with others

---

<div align="center">
  <p><strong>Built with ❤️ for a more secure and private web</strong></p>
  <p>© 2025 StuffingGuard. All rights reserved.</p>
</div>
