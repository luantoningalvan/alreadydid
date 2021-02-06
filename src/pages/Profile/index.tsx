import React, { useEffect, useState } from "react";
import {
  FiCamera,
  FiCheck,
  FiEdit,
  FiHeart,
  FiHelpCircle,
  FiPlusCircle,
  FiTrash,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Menu } from "../../components";
import { useUsers } from "../../hooks/UsersContext";
import { ProfileHeader, Tabs, Avatar } from "./styles";
import avatarPlaceholder from "../../assets/avatar-placeholder.jpg";

const Home = () => {
  const [avatarMenu, setAvatarMenu] = useState<any>(null);
  const { user, fetchUser } = useUsers();

  const {
    page: currentPage,
    id: userId,
  }: { page: string; id: string } = useParams();

  const getTab = (param: string | undefined) => {
    switch (param) {
      case "ideias":
        return <p>Ideias</p>;
      case "did":
        return <p>Feioto</p>;
      case "wishes":
        return <p>Desejos</p>;
      default:
        return <p>Ideias</p>;
    }
  };

  useEffect(() => {
    fetchUser(userId);
  }, [userId, fetchUser]);

  const Tab = () => getTab(currentPage);

  return (
    <Container>
      <Grid container style={{ margin: "32px 0" }}>
        <Grid item xs={12}>
          <ProfileHeader>
            <Avatar>
              <img src={user.avatar || avatarPlaceholder} alt="" />

              <button
                className="edit-avatar"
                onClick={(e) => setAvatarMenu(e.currentTarget)}
              >
                <FiCamera size={18} />
              </button>
              <Menu
                open={Boolean(avatarMenu)}
                anchorEl={avatarMenu}
                onClose={() => setAvatarMenu(null)}
                options={
                  user.avatar
                    ? [
                        { label: "Editar foto", icon: <FiEdit /> },
                        { label: "Remover foto", icon: <FiTrash /> },
                      ]
                    : [{ label: "Adicionar foto", icon: <FiPlusCircle /> }]
                }
              />
            </Avatar>
            <h2>{user.username}</h2>
          </ProfileHeader>
        </Grid>
        <Grid item xs={12}>
          <Tabs>
            <li
              className={
                currentPage !== "did" && currentPage !== "wishes"
                  ? "selected"
                  : undefined
              }
            >
              <Link to={`/${userId}/ideias`}>
                <FiHelpCircle /> Ideias
              </Link>
            </li>
            <li className={currentPage === "did" ? "selected" : undefined}>
              <Link to={`/${userId}/did`}>
                <FiCheck /> Já fez
              </Link>
            </li>
            <li className={currentPage === "wishes" ? "selected" : undefined}>
              <Link to={`/${userId}/wishes`}>
                <FiHeart /> Quer fazer
              </Link>
            </li>
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <Tab />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
