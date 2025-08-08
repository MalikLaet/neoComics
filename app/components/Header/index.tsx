"use client";

import React from 'react'
import { Search, ShoppingCart  } from 'lucide-react'
import { ButtonSearch, HeaderContainer, Tittle } from './styled'
import Link from 'next/link';
export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Tittle>NeoComics</Tittle>
        </Link>
        <div>
        <ButtonSearch>
            O que você procura?
            <Search size={16}/>
        </ButtonSearch>
        </div>
        <Link href="/Cart">
        <ShoppingCart size={20}/>
        </Link>
    </HeaderContainer>
  )
}
