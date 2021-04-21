import styled from "styled-components";
import { CircularButton } from "../bases/CircularButton";

export const CircularDate = styled(CircularButton)<{ isActive: boolean }>`
  min-height: 50px;
  max-height: 50px;
  min-width: 50px;
  max-width: 50px;

  padding: ${({ theme }) => theme.spacer[2]};

  span:nth-child(2) {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.big};
  }
`;
