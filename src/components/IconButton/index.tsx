import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";
import { IconType } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { icon: Icon, ...rest } = props;

  return (
    <ButtonContainer {...rest}>
      <Icon size={22} />
    </ButtonContainer>
  );
};

export default Button;
