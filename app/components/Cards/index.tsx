import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ButtonCard, CardContariner, PriceCard, TittleCard } from "./styled";
import comicsMock from "@/app/mocks/comicsMock.json";

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
          <CardContariner key={comic.id}>
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
        ))}
      </ul>
    </>
  );
}
