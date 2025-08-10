"use client";

import React from "react";
import {  ShoppingCart } from "lucide-react";
import {  HeaderContainer, SearchInput, SearchWrapper, Tittle } from "./styled";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/app/slices/comicsSlice";
import { RootState } from "@/app/store"; 

export default function Header() {
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

  <Link href="/Cart">
    <ShoppingCart color="#121214" size="1.8rem" />
  </Link>
</HeaderContainer>

  );
}
