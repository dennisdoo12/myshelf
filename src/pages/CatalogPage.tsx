import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { getItems } from "../api/items";
import type { Item } from "../types/Item";

//this is the catalog page that displays all the movies in the catalog 
function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";
//this is the use query that fetches the items and returns the data
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  //if the data is loading or there is an error display a message
  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading movies.</h2>;
//this filters the items based on the search query
  const filteredItems = data.filter((item: Item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Movie Catalog</h1>

      <input
        className="mb-4 w-full rounded border p-2 text-black"
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(event) => setSearchParams({ q: event.target.value })}
      />

      <ul className="space-y-2">
        {filteredItems.map((item: Item) => (
          <li key={item.id} className="rounded border p-3">
            <Link className="font-semibold text-blue-600" to={`/items/${item.id}`}>
              {item.title}
            </Link>
            <p>{item.creator} • {item.year} • {item.genre}</p>
            <p>Status: {item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;