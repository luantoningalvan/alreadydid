import React from "react";
import { ButtonContainer } from "./styles";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: IconType;
  endIcon?: IconType;
  variant?: "contained" | "outlined";
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    endIcon: EndIcon,
    startIcon: StartIcon,
    variant = "contained",
    ...rest
  } = props;

  return (
    <ButtonContainer variant={variant} {...rest}>
      {StartIcon && <StartIcon size={18} />}
      {children}
      {EndIcon && <EndIcon size={18} />}
    </ButtonContainer>
  );
};

export default Button;
