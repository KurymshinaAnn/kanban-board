import styled from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const NewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media (max-width: ${breakpoints.lg}px) {
    top: 70px;
  }
`;

export const NewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: ${breakpoints.lg}px) {
    padding: 0;
    justify-content: flex-start;
  }

  @media (max-width: ${breakpoints.md}px) {
    padding: 0;
    justify-content: flex-start;
  }
`;
