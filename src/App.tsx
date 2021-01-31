import Routes from "./routes";
import "./config/firebase";
import { AuthProvider } from "./hooks/AuthContext";
import { ThemeProvider } from "styled-components";

const theme = {
  palette: {
    primary: { background: "#F35773", foreground: "#fff" },
    secondary: { background: "#1ABDB3", foreground: "#fff" },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
