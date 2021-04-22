import styled from "styled-components";

export const GroupedButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacer[4]};
  
  button {
    border: none;
    font-weight: bold;
    padding: ${({ theme }) => theme.spacer[4]};
    width: 50%;
  }

  button:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  button:last-of-type {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
