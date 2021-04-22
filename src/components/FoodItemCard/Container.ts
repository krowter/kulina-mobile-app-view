import styled from "styled-components";

export const FoodItemsContainer = styled.div`
  //9rem is height of navbar
  margin-top: ${({ theme }) => `calc(9rem + ${theme.spacer[10]})`};
`;
