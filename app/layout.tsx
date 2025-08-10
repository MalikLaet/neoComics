"use client";

import { GlobalStyle } from "./styles/global";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}