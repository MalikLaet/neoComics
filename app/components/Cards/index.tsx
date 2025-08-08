import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ButtonCard, CardContariner, PriceCard, TittleCard } from "./styled";
// import comicsMock from "@/app/mocks/comicsMock.json";
import Link from "next/link";
import md5 from "crypto-js/md5";

export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const publicKey = "cca0fda9ccd59784c51d1235a0d916e4";
const privateKey = "e2836998fb198bd9fc62356ee436afda64b09c5c";

export default function Cards() {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey).toString();
  const [comics, setComics] = useState<Comic[]>([]); 

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
        );
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const json = await response.json();
        const filteredComics = json.data.results.filter(
        (comic) => !comic.thumbnail.path.includes("image_not_available")
      );
setComics(filteredComics);
      } catch (error) {
        console.error("Erro ao buscar quadrinhos:", error);
      }
    };

    fetchComics();
  }, [ts, hash]);

  return (
    <>
      <h1>Quadrinhos da Marvel</h1>
      <ul>
        {comics.map((comic) => (
                  <Link key={comic.id} href={`/comics/${comic.id}`}>
          <CardContariner>
              <Image
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                width={150}
                height={200}
              />
            <TittleCard>{comic.title}</TittleCard>
            <PriceCard>R$ 39,90</PriceCard>
            <ButtonCard>Adicionar ao carrinho</ButtonCard>
          </CardContariner>
            </Link>
        ))}
      </ul>
    </>
  );
}
