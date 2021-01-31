import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ModalBackground = styled.div`
  background: #fff;
  border-radius: 8px;
  margin: 32px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px;
`;

export const ModalContent = styled.div`
  margin: 16px 24px;
  flex: 1;
`;

export const ModalFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 16px 24px;
`;
