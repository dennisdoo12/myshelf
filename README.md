# MyShelf

## Description

MyShelf is a React and TypeScript web application that helps users organize and track a personal collection of movies.

Users can:
- View a catalog of movies
- Search and filter movies
- View movie details
- Track the status of movies (Want to Watch, Active, Done, Dropped)
- Edit movie information

The application uses React Router for page navigation, TanStack Query for server state management, Zustand for client state management, and json-server as a mock backend.

---

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Zustand
- JSON Server

---

## Database

The project includes two database files:

- **db.json** – Stores the current application data used by json-server.
- **db.seed.json** – Stores the original seed data that can be used to reset the database.

Each movie contains:

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

Start the React application:

```bash
npm run dev
```

Start the JSON server:

```bash
npx json-server --watch db.json --port 3001
```

---

## Author

Dennis Bailey