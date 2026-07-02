// Imports the useQuery hook from TanStack Query. This imports the hook that handles fetching, caching, and updating server data.
import { useQuery } from "@tanstack/react-query";

// Imports useSearchParams so the search query is stored in the URL.
import { useSearchParams } from "react-router-dom";

// Imports our function that fetches the movies from the backend. Imports the function I wrote that fetches the movies from the json-server.
import { getItems } from "../api/items";

function CatalogPage() {
  // Stores the search query in the URL.
  const [searchParams, setSearchParams] = useSearchParams();

  // Gets the current search query. If there isn't one, use an empty string.
  const searchQuery = searchParams.get("q") ?? "";

  // Calls the backend and stores the results.
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  // Display while the movies are loading.
  if (isLoading) return <h2>Loading...</h2>;

  // Display if something went wrong.
  if (isError) return <h2>Error loading movies.</h2>;

  // Filters the movie list based on what the user typed into the search box.
  const filteredItems = data.filter((item: any) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Catalog Page</h1>

      {/* Search box. Updates the URL every time the user types. */}
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(event) =>
          setSearchParams({ q: event.target.value })
        }
      />

      {/* Display every movie title from the filtered array */}
      <ul>
        {filteredItems.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;