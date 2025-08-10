'use client'

import React from 'react'
import Home from '@/app/Home';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Home/>
    </ThemeProvider>
  )
}
