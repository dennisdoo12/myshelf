// This file contains all of the functions that communicate with the backend (json-server).

// The backend URL where our movie data is stored. instead of typing the url everywhere we save it in this variable so if the server needs to be changed we just change this one line. 
const API_URL = "http://localhost:3001/items";

// Retrieves all movies from the backend.
export async function getItems() {
  // Sends a GET request to the server.
  const response = await fetch(API_URL);

  // Converts the JSON response into JavaScript objects.
  const data = await response.json();

  // Returns the movie list to whatever called this function.
  return data;
}