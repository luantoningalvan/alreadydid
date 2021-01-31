import styled from "styled-components";

export const Skeleton = styled.div`
  background-image: linear-gradient(
    -90deg,
    #ffffff 0%,
    #ececec 50%,
    #ffffff 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const ContentLoader = styled.div`
  .row {
    display: flex;
    align-items: center;

    .square-skeleton {
      width: 100%;
      height: 200px;
      border-radius: 2px;
    }

    .row-skeleton {
      height: 12px;
      width: 70%;
    }
  }
`;
