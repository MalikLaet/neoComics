import Cards from "@/app/components/Cards";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { defaultTheme } from "@/app/styles/themes/default";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../store";

export default function Home() {
  return (
        <ThemeProvider theme={defaultTheme}>
          <Provider store={store}>
      <Header/>
      <Cards/>
      <Footer/>
      </Provider>
    </ThemeProvider>
  )
}
