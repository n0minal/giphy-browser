
import { Container, ThemeProvider } from "@mui/material";
import Router from "./router";
import theme from "./theme";
import "./app.styles.scss";

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
