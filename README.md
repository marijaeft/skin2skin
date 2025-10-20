# Skin2Skin – Frontend
Version 0.0.0

A React + Vite frontend application for **Skin2Skin**, a skincare brand offering products, tips, and routines to promote healthy and radiant skin.  

Live App: [https://skin2skin.vercel.app/](https://skin2skin.vercel.app/)

## Tech Stack
- **React 19** – UI library  
- **Vite** – Fast build tool and dev server  
- **TailwindCSS 4** – Utility-first CSS framework  
- **DaisyUI** – Prebuilt UI components  
- **TailwindCSS Motion** – Animations for interactive UI  
- **Firebase** – Backend and authentication  

## Project Structure

```
skin2skin-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/        # Reusable UI components
│   ├── data/              # Firebase config and products fetch
│   ├── App.tsx            # Main app entry with routing
│   ├── main.jsx           # ReactDOM render
│   └── App.css            # Global styles
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
```

##  Scripts

Run with **npm**:

- `npm run dev` – Start development server  
- `npm run build` – Build production assets  
- `npm run preview` – Preview production build locally  
- `npm run lint` – Run ESLint checks  
- `npm run vercel-build` – Build optimized for Vercel deployment  

---
## Requirements

- Node.js >= 18 (tested on v22.15.1)  
- npm >= 9 (tested on v11.4.0)

##  Setup & Installation

1. Clone the repository:

   ```git clone https://github.com/marijaeft/skin2skin.git```
   ```cd skin2skin-frontend```

2. Install dependencies:
    
   ```npm install```

3. Create a .env file in the root directory and add your Firebase configuration. Replace the values in <...> with the credentials from your Firebase project:

```
VITE_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
VITE_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
VITE_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
VITE_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
VITE_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
VITE_FIREBASE_APP_ID=<YOUR_FIREBASE_APP_ID>
VITE_FIREBASE_MEASUREMENT_ID=<YOUR_FIREBASE_MEASUREMENT_ID>
```

##  Deployment

This project is optimized for deployment on **Vercel**.  
1.Push the repository to GitHub.
2.Connect the repository to Vercel.
3.Vercel will automatically use npm run build to deploy the production build.

##  Features

- Modern, responsive UI built with TailwindCSS and DaisyUI  
- Interactive animations using TailwindCSS Motion and custom rombo effects  
- Client-side routing with React Router  
- Firebase integration for fetching products and dynamic content  
- Optimized for fast load times with Vite   

##  Author

**Marija Eftimova** 