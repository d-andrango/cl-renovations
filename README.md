# CL Renovations Website

A modern, responsive website for CL Renovations built with React 19, TypeScript, and Vite.

## 🚀 Features

- ✨ React 19 with React Compiler
- 🎨 SCSS with BEM methodology
- 🌓 Dark/Light theme system with localStorage persistence
- 🌍 i18n support (English/Spanish)
- 📱 Fully responsive design
- 🎬 Video background hero section
- 📧 Contact form with Web3Forms integration (no backend needed)
- 🗺️ Google Maps integration
- ♿ Accessible (ARIA labels, semantic HTML)
- 🎭 Smooth scroll animations

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+ (recommended: v22.22.2)
- npm or yarn

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cl-renovations
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Contact Form** (Required for contact form to work)
   
   See [SETUP_CONTACT_FORM.md](./SETUP_CONTACT_FORM.md) for detailed instructions.
   
   Quick steps:
   - Go to [web3forms.com](https://web3forms.com) and get a free access key
   - Open `src/features/contact/Contact.tsx`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual key
   
4. **Start development server**
   ```bash
   nvm use 22  # If using nvm
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar/
│   │   ├── MobileMenu/
│   │   └── Footer/
├── features/
│   ├── hero/
│   ├── services/
│   ├── process/
│   ├── portfolio/
│   ├── experience/
│   ├── testimonials/
│   ├── serviceArea/
│   └── contact/
├── core/
│   ├── i18n/
│   ├── theme/
│   ├── hooks/
│   └── types/
└── styles/
    ├── global.scss
    ├── _variables.scss
    ├── _themes.scss
    └── _mixins.scss
```

## 🎨 Tech Stack

- **React 19** - UI library with React Compiler
- **TypeScript** - Type safety
- **Vite 8** - Build tool and dev server
- **SCSS** - Styling with BEM methodology
- **Web3Forms** - Contact form backend (free, no server needed)
- **Google Maps** - Location integration

## 🌐 Deployment

### Build for production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## 📧 Contact Form

The contact form uses Web3Forms, a free service that sends form submissions directly to your email without needing a backend.

- **Free tier**: 250 submissions/month
- **Setup time**: ~5 minutes
- **No credit card required**
- **Auto-responder**: Sends confirmation emails to users automatically

### Quick Setup:

1. **Get Access Key**: See [SETUP_CONTACT_FORM.md](./SETUP_CONTACT_FORM.md)
2. **Enable Auto-responder** (optional): See [AUTORESPONDER_SETUP.md](./AUTORESPONDER_SETUP.md)

With auto-responder enabled, users receive instant confirmation that you've received their message!

## 🎥 Video Background

Place your hero video at `public/videos/hero.mp4`. Recommended specs:
- Format: MP4 (H.264)
- Resolution: 1920x1080 or higher
- File size: Under 30MB
- Duration: 10-30 seconds looped

## 🗺️ Maps Configuration

The Google Maps embed in the Service Area section is pre-configured for East London. To update:
1. Open `src/features/serviceArea/ServiceArea.tsx`
2. Update the iframe `src` URL with your desired location

## 🌍 Adding/Editing Content

### Change languages
Edit translations in `src/core/i18n/translations.ts`

### Update service areas
Edit the areas array in translations file under `serviceArea.areas`

### Modify theme colors
Update variables in `src/styles/_variables.scss` and `src/styles/_themes.scss`

## 🔧 Development

### Type checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📝 License

Copyright © 2026 CL Renovations. All rights reserved.

---

Built with ❤️ using React 19 + TypeScript + Vite


## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
