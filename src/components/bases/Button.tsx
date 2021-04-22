import styled from "styled-components";

export const Button = styled.button<{
  isActive: boolean;
}>`
  background: ${({ theme, isActive }) =>
    isActive ? theme.color.darkgrey : theme.color.light};
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.light : theme.color.darkgrey};
  border: none;

  cursor: pointer;

  &:focus {
    background: ${({ theme }) => theme.color.darkgrey};
    color: ${({ theme }) => theme.color.light};
  }
`;
