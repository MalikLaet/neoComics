import { ReactNode } from "react";
import { GlobalStyle } from "./styles/global";
import { Provider } from "react-redux";
import { store } from "./store";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
