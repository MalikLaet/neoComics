"use client";
import * as React from "react";
import Image from "next/image";
import comicsMock from "@/app/mocks/comicsMock.json";
import { MainContainer } from "../styled";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/app/styles/themes/default";

interface Params {
  params: Promise<{ id: string }>;
}

export default function ComicDetail({ params }: Params) {
  const unwrappedParams = React.use(params); 
  const comicId = Number(unwrappedParams.id);
  const comic = comicsMock.find((c) => c.id === comicId);

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
