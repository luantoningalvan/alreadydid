import styled from "styled-components";

export const IdeiaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background: #fff;
  padding: 16px;
  position: relative;
  cursor: pointer;

  .clickable-area {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    z-index: 1;
  }

  button {
    z-index: 2;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    width: 100%;
    margin-top: 16px;

    button + button {
      margin-left: 8px;
    }
    > div {
      display: flex;
      align-items: center;
    }
  }

  h3 {
    font-size: 1.6rem;
    margin-top: 12px;
  }

  p {
    font-size: 1.1rem;
    margin-top: 4px;
  }
`;

export const CategoryLabel = styled.div`
  background: #1abdb3;
  color: #fff;
  font-weight: lighter;
  border-radius: 4px;
  display: block;
  padding: 4px 8px;
  font-size: 1rem;
`;
