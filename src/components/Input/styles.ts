/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from "styled-components";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid #cacaca;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #333;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.palette.primary.background};
      border-color: ${props.theme.palette.primary.background};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.theme.palette.primary.background};
    `}

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #333;
    padding: 16px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin: 0px 16px;
    & + svg {
      margin: 0px;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin: 0px 16px;
  svg {
    margin: 0px;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
