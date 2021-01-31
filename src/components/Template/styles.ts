import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    background: #ececec;
  }

  body, button, input {
    font-family: 'Ubuntu', sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  li {
    list-style: none
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 64px;
  background: red;
  padding: 0px calc((100% - 1024px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  .header-logo {
    display: flex;
    align-items: center;
    color: #000;
    font-size: 1.2rem;
    font-weight: bold;

    span {
      color: #f35773;
    }

    img {
      height: 40px;
      margin-right: 8px;
    }
  }

  nav {
    display: flex;
    align-items: center;

    button + button {
      margin-left: 8px;
    }
  }
`;

export const UserAvatar = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin-left: 16px;
  cursor: pointer;
  border: none;

  img {
    height: 100%;
    width: 100%;
  }
`;
