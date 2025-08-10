"use client";
import React from "react";
import { MainContainer } from "../comics/styled";
import Header from "../components/Header/index";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../slices/cartSlice";
import Footer from "../components/Footer";
import { BackHomeButton, ButtonRemove, CartSummary, ComicImage, ContentWrapper, InfoCard, PriceCard, QuantityButton, QuantityControls, QuantityNumber, SummaryRow, TitleCard } from "./styled";
import { useRouter } from "next/navigation";

export default function CartPage() {
  
const dispatch = useDispatch();
const router = useRouter();
const cartItems = useSelector((state: RootState) => state.cart.items);

const handleIncrease = (id: number) => {
  dispatch(increaseQuantity(id));
};

const handleDecrease = (id: number) => {
  dispatch(decreaseQuantity(id));
};

const totalPrice = cartItems.reduce(
  (acc, item) => acc + (item.prices?.[0]?.price || 0) * item.quantity,
  0
);

return (
  <ThemeProvider theme={defaultTheme}>
    <Header />
    <MainContainer>
      <h1>Seu Carrinho</h1>
     {cartItems.map((comic) => {
  const unitPrice = comic.prices?.[0]?.price || 0;
  return (
    <InfoCard key={comic.id}>
      <ContentWrapper>
      {comic.thumbnail?.path && comic.thumbnail?.extension ? (
        <ComicImage
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width={150}
          height={200}
        />
      ) : (
        <p>Imagem não disponível</p>
      )}

      <TitleCard>{comic.title}</TitleCard>

      <QuantityControls>
        <QuantityButton onClick={() => handleDecrease(comic.id)}>-</QuantityButton>
        <QuantityNumber>{comic.quantity}</QuantityNumber>
        <QuantityButton onClick={() => handleIncrease(comic.id)}>+</QuantityButton>
      </QuantityControls>

      <ButtonRemove onClick={() => dispatch(removeFromCart(comic.id))}>
        Remover
      </ButtonRemove>

      <PriceCard>
        Preço: R$ {(unitPrice * comic.quantity).toFixed(2)}
      </PriceCard>
        </ContentWrapper>
    </InfoCard>
  )
})}


      <CartSummary>
        <SummaryRow>
          <span>Total:</span>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </SummaryRow>

        <BackHomeButton onClick={() => router.push('/')}>
          Voltar para Home
        </BackHomeButton>
      </CartSummary>
    </MainContainer>
    <Footer />
  </ThemeProvider>
);
}
