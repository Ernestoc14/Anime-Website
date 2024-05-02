import { data } from "./_data";
import AnimeCard from "@/components/AnimeCard";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="grid grid-cols-2 gap-4">
        {data.map((anime, item) => (
          <AnimeCard key={anime.id} anime={data[item]} index={0} />
        ))}
      </div>
    </main>
  );
}
