// Imports the useQuery hook from TanStack Query. This imports the hook that handles fetching, caching, and updating server data.
import { useQuery } from "@tanstack/react-query";

// Imports useSearchParams so the search query is stored in the URL.
import { useSearchParams } from "react-router-dom";

// Imports our function that fetches the movies from the backend.
import { getItems } from "../api/items";

// Imports the Item type so TypeScript knows what each movie object looks like.
import type { Item } from "../types/Item";

function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading movies.</h2>;

  const filteredItems = data.filter((item: Item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Catalog Page</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(event) => setSearchParams({ q: event.target.value })}
      />

      <ul>
        {filteredItems.map((item: Item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;