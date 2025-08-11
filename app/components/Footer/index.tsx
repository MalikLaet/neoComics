import React from 'react'
import { GithubIcon, Linkedin, } from 'lucide-react'
import { FooterComponent, SocialMedia, TextName } from './styled'
export default function Footer() {
  return (
    <FooterComponent>
        <TextName>@2025 Malik Laet</TextName>
        <SocialMedia>
           <a
          href="https://github.com/MalikLaet" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon color='#FFFFFF' />
        </a>

        <a
          href="https://linkedin.com/in/malik-de-laet-abashi" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin color='#FFFFFF' />
        </a>
        </SocialMedia>
    </FooterComponent>
  )
}
