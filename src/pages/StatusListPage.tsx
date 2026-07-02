import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getItems } from "../api/items";
import type { Item } from "../types/Item";

const validStatuses = ["want", "active", "done", "dropped"];

function StatusListPage() {
  const { status } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  if (!status || !validStatuses.includes(status)) {
    return <h2>Invalid status.</h2>;
  }

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading movies.</h2>;

  const filteredItems = data.filter(
    (item: Item) =>
      item.status === status &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Status: {status}</h1>

      <input
        className="mb-4 w-full rounded border p-2 text-black"
        type="text"
        placeholder="Search this list..."
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusListPage;