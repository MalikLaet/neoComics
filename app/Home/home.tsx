import Cards from "@/app/components/Cards";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { defaultTheme } from "@/app/styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
        <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Cards/>
      <Footer/>
    </ThemeProvider>
  )
}
