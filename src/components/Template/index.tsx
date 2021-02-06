import React, { useCallback, useState } from "react";

import { GlobalStyle, Header, UserAvatar } from "./styles";
import { Button, IconButton, Menu } from "../";
import NewIdeia from "../NewIdeia";
import Authenticate from "../Authenticate";

import { FiHeart, FiLogOut, FiPlusCircle, FiUser } from "react-icons/fi";

import { useAuth } from "../../hooks/AuthContext";
import { Link, useHistory } from "react-router-dom";

import logo from "../../assets/logo.svg";

const Template: React.FC = ({ children }) => {
  const [authDialog, setAuthDialog] = useState(false);
  const [createIdeiaDialog, setCreateIdeiaDialog] = useState(false);
  const [menu, setMenu] = useState(null);
  const { currentUser, logout } = useAuth();
  const { push } = useHistory();

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

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <>
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
                options={[
                  {
                    label: "Perfil",
                    icon: <FiUser />,
                    onClick: () => push(`/${currentUser.uid}`),
                  },
                  { label: "Sair", icon: <FiLogOut />, onClick: handleLogout },
                ]}
              />
            </>
          )}
        </nav>
      </Header>

      <main>{children}</main>
    </>
  );
};

export default Template;
