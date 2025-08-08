import Image from "next/image";
import React, { useEffect } from "react";
import { ButtonCard, CardContariner, PriceCard, TittleCard } from "./styled";

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store";
import { Comic, fetchComics } from "@/app/slices/comicsSlice";
import { addToCart } from "@/app/slices/cartSlice";
import { defaultTheme } from "@/app/styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function Cards() {
  const dispatch = useDispatch<AppDispatch>();
  const { comics, loading, error } = useSelector(
    (state: RootState) => state.comics
  );

  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  const handleAddToCart = (comic: Comic) => {
    dispatch(addToCart(comic));
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Quadrinhos da Marvel</h1>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <Link href={`/comics/${comic.id}`}>
              <CardContariner>
                {comic.thumbnail && (
                  <Image
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    width={150}
                    height={200}
                  />
                )}
                <TittleCard>{comic.title}</TittleCard>
                <PriceCard>R$ 39,90</PriceCard>
              </CardContariner>
            </Link>
            <ButtonCard
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddToCart(comic);
              }}
            >
              Adicionar ao carrinho
            </ButtonCard>
          </li>
        ))}
      </ul>
    </ThemeProvider>
  );
}
