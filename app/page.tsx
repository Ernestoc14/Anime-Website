import { data } from "./_data";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { fetchAnime } from "./action";

export default async function Home() {
  await fetchAnime(1)

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="grid grid-cols-2 gap-4">
        {data.map((item: AnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </div>
    </main>
  );
}
