"use client";

import React from "react";
import {  ShoppingCart } from "lucide-react";
import {  HeaderContainer, QuantifyCart, SearchInput, SearchWrapper, Tittle } from "./styled";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/app/slices/comicsSlice";
import { RootState } from "@/app/store"; 

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.comics.searchQuery);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
<HeaderContainer>
  <Link href="/" style={{ textDecoration: "none" }}>
    <Tittle>NeoComics</Tittle>
  </Link>

  <SearchWrapper>
    <SearchInput
      data-cy="search-input"
      type="text"
      placeholder="O que você procura?"
      value={searchQuery}
      onChange={handleChange}
    />
  </SearchWrapper>

  <Link data-cy="open-cart" href="/Cart">
    <ShoppingCart color="#121214" size="1.8rem" />
         {totalQuantity > 0 && (
        <QuantifyCart>
          {totalQuantity}
        </QuantifyCart>
      )}
  </Link>
</HeaderContainer>

  );
}
