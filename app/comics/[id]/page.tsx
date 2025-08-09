"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { MainContainer } from "../styled";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/app/styles/themes/default";

interface ComicDetailProps {
  params: { id: string };
}

export default function ComicDetail({ params }: ComicDetailProps) {
  const comicId = Number(params.id);

  const comic = useSelector((state: RootState) =>
    state.comics.comics.find((c) => c.id === comicId)
  );

  if (!comic) {
    return <h1>Quadrinho não encontrado!</h1>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <h1>{comic.title}</h1>
        <Image
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width={300}
          height={400}
        />
        <p>Preço: R$ 39,90</p>
      </MainContainer>
    </ThemeProvider>
  );
}
