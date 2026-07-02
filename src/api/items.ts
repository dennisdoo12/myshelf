//the import type is item
import type { Item } from "../types/Item";
//website api link stored in variable
const API_URL = "http://localhost:3001/items";
//this function fetches the items from the api and returns an new array of items if failed throws error 
export async function getItems(): Promise<Item[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch items");
  return response.json();
}
//this function fetches a single item by id from the api and returns the item 
export async function getItemById(id: string): Promise<Item | null> {
  const response = await fetch(`${API_URL}/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Failed to fetch item");
  return response.json();
}
//function updates an item by id and returns the updated item 
export async function updateItem(id: number, updates: Partial<Item>): Promise<Item> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  if (!response.ok) throw new Error("Failed to update item");
  return response.json();
}