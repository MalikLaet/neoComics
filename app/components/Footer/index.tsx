import React from 'react'
import { GithubIcon, Linkedin, } from 'lucide-react'
import { FooterComponent, SocialMedia, TextName } from './styled'
export default function Footer() {
  return (
    <FooterComponent>
        <TextName>@2025 Malik Laet</TextName>
        <SocialMedia>
        <GithubIcon color='#FFFFFF'/>
        <Linkedin color='#FFFFFF'/>
        </SocialMedia>
    </FooterComponent>
  )
}
