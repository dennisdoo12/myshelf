//this defines what every movie object should look like its a blueprint for every movies properties and their types. Prevents having to copy paste everywhere
export interface Item {
  id: number;
  title: string;
  creator: string;
  year: number;
  genre: string;
  status: "want" | "active" | "done" | "dropped";
  rating: number | null;
  note: string | null;
}