import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  height: 9rem;
  background: ${({ theme }) => theme.color.light};
  max-width: 375px; //width of container
  padding: ${({ theme }) => theme.spacer[6]} 0;
  position: fixed;
  top: 0;
`;

export const LocationTitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const Location = styled.span`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: bold;

  span {
    margin-right: ${({ theme }) => theme.spacer[4]};
  }
`;

export const ExpandMoreWrapper = styled.button`
  border: none;
  background: transparent;
`;
export const LocationWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacer[6]};
`;

export const DatesContainer = styled.section`
  display: flex;
  overflow-x: auto;
`;
