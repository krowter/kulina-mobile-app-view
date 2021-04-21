import styled from "styled-components";
import { CircularButton } from "../bases/CircularButton";

export const CircularDate = styled(CircularButton)<{ isActive: boolean }>`
  flex-basis: 1 1 0;
  box-sizing: content-box;
  margin: ${({ theme }) => theme.spacer[2]};
  min-height: 40px;
  min-width: 40px;
  max-height: 40px;
  max-width: 40px;

  padding: ${({ theme }) => theme.spacer[4]};

  span:nth-child(2) {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.big};
  }
`;
