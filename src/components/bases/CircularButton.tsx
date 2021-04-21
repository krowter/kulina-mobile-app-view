import styled from "styled-components";

export const CircularButton = styled.button`
  background: ${({ theme }) => theme.color.lightgrey};
  border: none;
  border-radius: 50%;

  &:focus {
    background: ${({ theme }) => theme.color.darkgrey};
    color: ${({ theme }) => theme.color.lightgrey};
  }
`;
