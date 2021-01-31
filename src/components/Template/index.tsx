import React, { useCallback, useState } from "react";
import { GlobalStyle, Header, UserAvatar } from "./styles";
import { FiPlusCircle, FiUser } from "react-icons/fi";
import { Button, IconButton } from "../";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import NewIdeia from "../../components/NewIdeia";
import Authenticate from "../../components/Authenticate";
import { ThemeProvider } from "styled-components";
import { Menu } from "../Menu";
import { useAuth } from "../../hooks/AuthContext";

const Template: React.FC = ({ children }) => {
  const [authDialog, setAuthDialog] = useState(false);
  const [createIdeiaDialog, setCreateIdeiaDialog] = useState(false);
  const [menu, setMenu] = useState(null);
  const { currentUser, logout } = useAuth();

  const theme = {
    palette: {
      primary: { background: "#F35773", foreground: "#fff" },
      secondary: { background: "#1ABDB3", foreground: "#fff" },
    },
  };

  const handleLoginDialog = useCallback(() => {
    setAuthDialog(!authDialog);
  }, [authDialog]);

  const handleCreateIdeiaDialog = useCallback(() => {
    if (currentUser) {
      setCreateIdeiaDialog(true);
    } else {
      setAuthDialog(true);
    }
  }, [currentUser]);

  const handeLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <NewIdeia
        open={createIdeiaDialog}
        onClose={() => setCreateIdeiaDialog(false)}
      />

      <Authenticate open={authDialog} onClose={handleLoginDialog} />

      <Header>
        <Link to="/" className="header-logo">
          <img src={logo} alt="" />
          already<span>did</span>
        </Link>
        <nav>
          <Button onClick={handleCreateIdeiaDialog} startIcon={FiPlusCircle}>
            Criar sugestão
          </Button>

          {!currentUser && (
            <IconButton icon={FiUser} onClick={handleLoginDialog} />
          )}

          {currentUser && (
            <>
              <UserAvatar onClick={(e: any) => setMenu(e.target)}>L</UserAvatar>
              <Menu
                open={Boolean(menu)}
                anchorEl={menu}
                onClose={() => setMenu(null)}
                options={[{ label: "Sair", onClick: handeLogout }]}
              />
            </>
          )}
        </nav>
      </Header>

      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Template;
