// Imports the Item interface so TypeScript knows what every movie object looks like.
import type { Item } from "../types/Item";

// This file contains all of the functions that communicate with the backend (json-server).

// The backend URL where our movie data is stored. Instead of typing the URL everywhere, we save it in this variable so if the server needs to be changed we only change this one line.
const API_URL = "http://localhost:3001/items";

// Retrieves all movies from the backend.
export async function getItems(): Promise<Item[]> {
  // Sends a GET request to the server.
  const response = await fetch(API_URL);

  // Converts the JSON response into JavaScript objects.
  const data = await response.json();

  // Returns the movie list to whatever called this function.
  return data;
}