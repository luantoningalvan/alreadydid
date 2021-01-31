import styled, { css } from "styled-components";

const variants = {
  outlined: css`
    background: transparent;
    border: 1px solid #444;
    color: #444;
  `,

  contained: css`
    background: #f35773;
    color: #fff;
  `,
};

type ButtonContainerProps = {
  variant: "contained" | "outlined";
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  cursor: pointer;
  border: none;
  height: 40px;
  padding: 0px 16px;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;

  svg {
    &:nth-child(1) {
      margin-right: 8px;
    }
    &:nth-child(2) {
      margin-left: 8px;
    }
  }

  ${(props) => variants[props.variant]};
`;
