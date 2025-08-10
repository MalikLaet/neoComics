'use client'

import { Provider } from "react-redux"
import { store } from "./store"
import { GlobalStyle } from "./styles/global"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body >
         <GlobalStyle />
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
