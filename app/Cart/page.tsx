"use client";
import React from "react";
import Image from "next/image";
import { MainContainer } from "../comics/styled";
import Header from "../components/Header/index";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from '@/app/store';
import { removeFromCart } from "../slices/cartSlice";
export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (cartItems.length === 0) {
    return <p>Seu carrinho está vazio!</p>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <MainContainer>
        <h1>Seu Carrinho</h1>
      {cartItems.map((comic) => (
  <div key={comic.id} style={{ marginBottom: "20px" }}>
    <h3>{comic.title}</h3>
    {comic.thumbnail && comic.thumbnail.path && comic.thumbnail.extension ? (
      <Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        width={150}
        height={200}
      />
    ) : (
      <p>Imagem não disponível</p>
    )}
    <button onClick={() => dispatch(removeFromCart(comic.id))}>
      Remover
    </button>
    <p>Preço: R$ 39,90</p>
  </div>
))}
      </MainContainer>
    </ThemeProvider>
  );
}
