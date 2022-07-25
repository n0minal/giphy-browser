
import { Container, ThemeProvider } from "@mui/material";
import Router from "./router";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
