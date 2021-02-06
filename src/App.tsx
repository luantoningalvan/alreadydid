import Routes from "./routes";
import "./config/firebase";
import { AuthProvider } from "./hooks/AuthContext";
import { UsersProvider } from "./hooks/UsersContext";
import { IdeiasProvider } from "./hooks/IdeiasContext";
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
        <UsersProvider>
          <IdeiasProvider>
            <Routes />
          </IdeiasProvider>
        </UsersProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
