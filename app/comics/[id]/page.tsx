"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { MainContainer, BackHomeButton } from "../styled";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/app/styles/themes/default";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";

interface ComicDetailProps {
  params: { id: string };
}

export default function ComicDetail({ params }: ComicDetailProps) {
  const comicId = Number(params.id);
  const router = useRouter();

  const comic = useSelector((state: RootState) =>
    state.comics.comics.find((c) => c.id === comicId)
  );

  if (!comic) {
    return <h1>Quadrinho não encontrado!</h1>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
       <BackHomeButton onClick={() => router.push("/")}>
          Voltar para Home
        </BackHomeButton>
      <MainContainer>

        <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', maxWidth: '100%', width: 300 }}>
          <Image
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
            width={300}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h1>{comic.title}</h1>

        <p>Preço: R$ {(comic.prices?.[0]?.price || 39.90).toFixed(2)}</p>

       
      </MainContainer>
      <Footer />
    </ThemeProvider>
  );
}
