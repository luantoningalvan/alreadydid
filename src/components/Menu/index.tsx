import React from "react";
import { Dropdown, DropdownProps } from "../Dropdown";
import { MenuContainer, MenuItem, MenuItemIcon } from "./styles";

interface MenuProps extends DropdownProps {
  options: {
    label: string | JSX.Element;
    icon?: JSX.Element;
    onClick?(): void;
  }[];
}

export const Menu: React.FC<MenuProps> = ({
  anchorEl,
  onClose,
  open,
  placement,
  options,
  ...rest
}) => {
  return (
    <Dropdown
      anchorEl={anchorEl}
      onClose={onClose}
      open={open}
      placement={placement}
      {...rest}
    >
      <MenuContainer>
        {options.map((option) => (
          <MenuItem
            onClick={() => {
              onClose();
              option.onClick && option.onClick();
            }}
          >
            {option.icon && <MenuItemIcon>{option.icon}</MenuItemIcon>}
            {option.label}
          </MenuItem>
        ))}
      </MenuContainer>
    </Dropdown>
  );
};

export default Menu;
