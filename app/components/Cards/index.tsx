import Image from 'next/image'
import React from 'react'
import HQ from './hq.svg'
import { ButtonCard, CardContariner, PriceCard, TittleCard } from './styled'
export default function Cards() {
  return (
    <div>
      <CardContariner>
        <Image src={HQ} alt='imagem da hq' width={200} height={200}/>
        <TittleCard>Quarteto Fantastico</TittleCard>
        <PriceCard>R$39,90</PriceCard>
        <ButtonCard>Adicionar ao carrinho</ButtonCard>
      </CardContariner>
    </div>
  )
}
