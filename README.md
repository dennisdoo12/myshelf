# MyShelf

## Description

MyShelf is a React and TypeScript web application that helps users organize and track a personal collection of movies.

Users can:

- View a catalog of movies
- Search and filter movies
- View movie details
- Track the status of movies (Want, Active, Done, Dropped)
- Edit movie status, rating, and notes
- Save theme and display preferences between sessions

The application uses React Router for page navigation, TanStack Query for server state management, Zustand for client-side UI state management, and json-server as a mock backend.

---

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Zustand
- JSON Server
- Tailwind CSS

---

## Database

The project includes two database files:

- **db.json** – Stores the current application data used by json-server.
- **db.seed.json** – Stores the original seed data that can be used to reset the database.

Each movie contains the following fields:

- id
- title
- creator
- year
- genre
- status
- rating
- note

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

Start the JSON server:

```bash
npm run server
```

Build the project:

```bash
npm run build
```

---

## Project Structure

```text
src/
├── api/
├── components/
├── pages/
├── store/
├── types/
├── App.tsx
└── main.tsx
```

---

## Features

- React Router navigation
- URL-based search using `useSearchParams`
- Movie detail pages
- Filter movies by status
- Persistent theme and density settings with Zustand
- Data fetching and caching with TanStack Query
- Mock backend powered by json-server
- Responsive user interface

---

## Author

Dennis Bailey