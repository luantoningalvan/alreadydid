import styled from "styled-components";

export const MenuContainer = styled.ul`
  margin: 0px;
  padding: 8px 0px;
  min-width: 100px;
`;

export const MenuItem = styled.li`
  color: #333;
  list-style: none;
  padding: 8px 16px;
  user-select: none;
  cursor: pointer;
  transition: background linear 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItemIcon = styled.span`
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
