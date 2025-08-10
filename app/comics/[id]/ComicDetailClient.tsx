"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import { BackHomeButton, ComicImageStyled, MainContainer } from "../styled";

interface Props {
  comicId: number;
}

export default function ComicDetailClient({ comicId }: Props) {
  const router = useRouter();

  const comic = useSelector((state: RootState) =>
    state.comics.comics.find((c) => c.id === comicId)
  );

  if (!comic) {
    return <h1>Quadrinho não encontrado!</h1>;
  }

  return (
    <MainContainer>
      <BackHomeButton onClick={() => router.push("/")}>Voltar para Home</BackHomeButton>
      <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", maxWidth: 300 }}>
        <ComicImageStyled
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width={300}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>
      <h1>{comic.title}</h1>
      <p>Preço: R$ {(comic.prices?.[0]?.price || 39.9).toFixed(2)}</p>
    </MainContainer>
  );
}
