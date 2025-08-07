"use client";

import React from 'react'
import { Search, ShoppingCart  } from 'lucide-react'
import { ButtonSearch, HeaderContainer, Tittle } from './styled'
export default function Header() {
  return (
    <HeaderContainer>
        <Tittle>NeoComiics</Tittle>

        <div>
        <ButtonSearch>
            O que voce procura?
            <Search size={16}/>
        </ButtonSearch>
        </div>
        <ShoppingCart size={20}/>
    </HeaderContainer>
  )
}
