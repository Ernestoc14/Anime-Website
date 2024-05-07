// import { data } from "./_data";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { fetchAnime } from "./action";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await fetchAnime(1);

  return (
    <main className="flex flex-col max-w-3/4gap-4 sm:p-16 py-16 px-8">
      <h2 className="text-2xl font-bold">Explore the Animes</h2>
      <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}
