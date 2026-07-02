import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getItemById, updateItem } from "../api/items";
//this function is the item detail page that displays the details of a single movie and allows the user to update the status, rating and note of the movie.
function ItemDetailPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [note, setNote] = useState("");

  const {
    data: item,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["items", id],
    queryFn: () => getItemById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (item) setNote(item.note ?? "");
  }, [item]);

  const statusMutation = useMutation({
    mutationFn: (status: "want" | "active" | "done" | "dropped") =>
      updateItem(item!.id, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });

  const ratingMutation = useMutation({
    mutationFn: (rating: number | null) => updateItem(item!.id, { rating }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });

  const noteMutation = useMutation({
    mutationFn: (note: string) => updateItem(item!.id, { note }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] }),
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading movie.</h2>;
  if (!item) return <h2>Not found.</h2>;

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">{item.title}</h1>

      <p><strong>Creator:</strong> {item.creator}</p>
      <p><strong>Year:</strong> {item.year}</p>
      <p><strong>Genre:</strong> {item.genre}</p>

      <label className="block">
        Status:
        <select
          className="ml-2 rounded border p-1 text-black"
          value={item.status}
          onChange={(e) =>
            statusMutation.mutate(
              e.target.value as "want" | "active" | "done" | "dropped"
            )
          }
        >
          <option value="want">Want</option>
          <option value="active">Active</option>
          <option value="done">Done</option>
          <option value="dropped">Dropped</option>
        </select>
      </label>

      <label className="block">
        Rating:
        <select
          className="ml-2 rounded border p-1 text-black"
          value={item.rating ?? ""}
          onChange={(e) =>
            ratingMutation.mutate(e.target.value === "" ? null : Number(e.target.value))
          }
        >
          <option value="">Not rated</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <div>
        <label className="block font-semibold">Note:</label>
        <textarea
          className="w-full rounded border p-2 text-black"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          className="mt-2 rounded bg-blue-600 px-3 py-1 text-white"
          onClick={() => noteMutation.mutate(note)}
        >
          Save Note
        </button>
      </div>
    </div>
  );
}

export default ItemDetailPage;