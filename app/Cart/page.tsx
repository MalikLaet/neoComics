"use client";
import React from "react";
import comicsMock from "@/app/mocks/comicsMock.json";
import Image from "next/image";
import { MainContainer } from "../comics/styled";
import Header from "../components/Header/index";
import { useEffect } from "react";

export default function CartPage() {
  const [cartIds, setCartIds] = React.useState<number[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartIds(cart);
  }, []);

  const cartItems = comicsMock.filter((comic) => cartIds.includes(comic.id));

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <MainContainer>
          <h2>Seu carrinho está vazio!</h2>
        </MainContainer>
      </>
    );
  }

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Seu Carrinho</h1>
        {cartItems.map((comic) => (
          <div key={comic.id} style={{ marginBottom: "20px" }}>
            <h3>{comic.title}</h3>
            <Image
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              width={150}
              height={200}
            />
            <p>Preço: R$ 39,90</p>
          </div>
        ))}
      </MainContainer>
    </>
  );
}
