import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: transparent;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  height: 40px;
  width: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #444;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
