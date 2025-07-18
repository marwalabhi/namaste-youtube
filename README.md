# 🎬 YouTube Clone

A responsive and fast YouTube clone built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**. This project mimics core YouTube functionality including:

- 🔍 Video search
- 📺 Video playback
- 🔁 Infinite scrolling of trending videos
- 🧠 Smart caching with Redux

---

## 🚀 Features

- ⚛️ React 19 with functional components
- 🧰 Redux Toolkit with RTK Query for API calls
- 💅 Tailwind CSS for styling
- 🔁 Infinite scroll using `IntersectionObserver`
- 🔍 Debounced search suggestions with caching
- 📱 Fully responsive design

---

## 📦 Tech Stack

| Tech             | Description                              |
| ---------------- | ---------------------------------------- |
| React            | UI library                               |
| Redux Toolkit    | State management                         |
| RTK Query        | For API interaction and caching          |
| Tailwind CSS     | Utility-first styling                    |
| React Router     | Routing                                  |
| YouTube Data API | Fetch trending/search videos             |

---

## 🖼️ Screenshots

#### **YouTube Home**
![HomePage](https://drive.google.com/uc?export=view&id=1CNXxSOZu4mT6R72fqSkKofAFe4uEewDP)

#### **With Search**
![Homepage with Search](https://drive.google.com/uc?export=view&id=1L4kU7z3zPI8qsVkvZS6BYCOUthIptIQK)


#### **Showing Search Result**
![Search Result Page](https://drive.google.com/uc?export=view&id=1aC71szAVLTR3XcArpRyn4RpxSzd9QcIN)

### Prerequisites
To run this app locally, you’ll need:

1. Node.js and npm installed.
2. The ALLOW CORS browser extension installed and enabled.
   - [Download ALLOW CORS Extension](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en-GB&utm_source=ext_sidebar)
    The extension is required to bypass CORS restrictions while fetching search suggestion for the requested query

## 🛠️ Setup & Run

1. **Clone the repo**
```bash
git clone https://github.com/marwalabhi/namaste-youtube.git
cd namaste-youtube
```
2. **Install dependencies**
```bash
npm i
```
3. **Add API Key**
- Create a .env file
- Add your YouTube Data API Key:
  
  ```bash
  VITE_API_KEY = your_key_here

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
