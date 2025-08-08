import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ButtonCard, CardContariner, PriceCard, TittleCard } from "./styled";
import comicsMock from "@/app/mocks/comicsMock.json";
import Link from "next/link";

export interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export default function Cards() {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    setComics(comicsMock);
  }, []);

  return (
    <>
      <h1>Quadrinhos da Marvel</h1>
      <ul>
        {comics.map((comic) => (
                  <Link key={comic.id} href={`/comics/${comic.id}`}>
          <CardContariner>
              <Image
                src={`${comic.thumbnail.path}`}
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
