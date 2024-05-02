import Image from "next/image";
import { data } from "./_data";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="grid grid-cols-2 gap-4">
        {data.map((anime) => (
          <div key={anime.id}>
            <p className="font-bold mb-4">{anime.name}</p>
            <Image
              src={anime.image.original}
              alt="anime.name"
              width={150}
              height={5}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
