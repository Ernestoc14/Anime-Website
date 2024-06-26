"use client";
import Image from "next/image";
import { fetchAnime } from "@/app/action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

let page = 2;
export type AnimeCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (inView && page <= 3) {
      setIsLoading(true);
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <div ref={ref} className="flex justify-center items-center">
        {isLoading && inView && (
          <Image src="/spinner.svg" alt="loading" width={50} height={50} />
        )}
      </div>
    </>
  );
}

export default LoadMore;
