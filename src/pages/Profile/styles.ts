import styled from "styled-components";

export const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.3rem;
    font-weight: normal;
    margin-top: 16px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  img {
    height: 128px;
    width: 128px;
    border-radius: 50%;
  }

  .edit-avatar {
    position: absolute;
    right: 0;
    bottom: 0;
    background: white;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    padding: 6px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    border: none;
    cursor: pointer;
  }
`;

export const Tabs = styled.ul`
  display: flex;
  height: 50px;
  border-top: 1px solid #ccc;
  justify-content: center;
  margin: 32px 0px;

  li {
    margin-top: -1px;
  }

  li + li {
    margin-left: 32px;
  }

  li a {
    display: block;
    padding: 16px 0;
    color: #888;
    text-transform: uppercase;
    font-size: 0.9rem;
    border-top: 1px solid transparent;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  li.selected a {
    color: black;
    border-color: black;
  }
`;
