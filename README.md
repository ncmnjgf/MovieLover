# 🎬 movieLover-frontend

A modern frontend for browsing movies, searching by title/genre, and managing a personal watchlist. Built with React + Vite.

---

## ✨ Features

* Search movies by title, genre, or year
* Responsive **Card components** with poster, title, year, and rating
* Watchlist management (saved in localStorage)
* Routing: home → details page
* Loading, error, and empty states

---

## 🧱 Tech Stack

* React 18 + Vite
* React Router for navigation
* Axios for API calls
* Tailwind CSS (optional)
* Zustand or Context API for state management

---

## 🚀 Getting Started

```bash
# Create project
npm create vite@latest movieLover-frontend -- --template react-ts
cd movieLover-frontend

# Install dependencies
npm i axios react-router-dom zustand

# Run app
npm run dev
```

---

## 🔌 API Example

```ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: { apikey: import.meta.env.VITE_OMDB_API_KEY },
});

export async function searchMovies(query: string) {
  const { data } = await api.get("/", { params: { s: query } });
  return data;
}
```

---

## 🧩 Core Components

* **Card**: Movie card with poster, title, year, and add-to-watchlist
* **MovieGrid**: Renders a grid of cards
* **SearchBar**: Input with debounce for searching
* **RatingBadge**: Displays movie rating
* **Loader / ErrorState / EmptyState**: Feedback UI

---

## 🧭 Routing Example

```tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <MovieDetails /> },
]);
```

---

## 🗂️ Watchlist Hook

```ts
import { create } from "zustand";

export const useWatchlist = create<{ ids: string[]; add: (id: string) => void }>((set) => ({
  ids: JSON.parse(localStorage.getItem("watchlist") || "[]"),
  add: (id) => set((s) => {
    const ids = [...new Set([...s.ids, id])];
    localStorage.setItem("watchlist", JSON.stringify(ids));
    return { ids };
  }),
}));
```

---

## 📜 License

KIT
