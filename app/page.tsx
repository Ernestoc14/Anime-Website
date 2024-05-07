// import { data } from "./_data";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { fetchAnime } from "./action";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center sm:p-16 py-16 px-8 gap-10">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}
