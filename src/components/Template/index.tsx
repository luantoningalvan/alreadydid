import React, { useState } from "react";
import { GlobalStyle, Header } from "./styles";
import { FiHeart, FiPlusCircle } from "react-icons/fi";
import { Button, IconButton } from "../";
import { useHistory, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import NewIdeia from "../../components/NewIdeia";
import { ThemeProvider } from "styled-components";

const Template: React.FC = ({ children }) => {
  const history = useHistory();
  const [authDialog, setAuthDialog] = useState(false);

  const theme = {
    palette: {
      primary: { background: "#F35773", foreground: "#fff" },
      secondary: { background: "#1ABDB3", foreground: "#fff" },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NewIdeia open={authDialog} onClose={() => setAuthDialog(false)} />
      <Header>
        <Link to="/" className="header-logo">
          <img src={logo} alt="" />
          already<span>did</span>
        </Link>
        <nav>
          <IconButton icon={FiHeart} onClick={() => history.push("/wish")} />
          <Button onClick={() => setAuthDialog(true)} startIcon={FiPlusCircle}>
            Criar sugestão
          </Button>
        </nav>
      </Header>

      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Template;
