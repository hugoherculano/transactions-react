import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/Default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      
      <Transactions />
    </ThemeProvider>
  )
}
