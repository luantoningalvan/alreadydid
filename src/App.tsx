import Routes from "./routes";
import "./config/firebase";
import { AuthProvider } from "./hooks/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
