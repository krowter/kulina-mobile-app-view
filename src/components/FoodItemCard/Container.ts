import styled from "styled-components";

export const FoodItemsContainer = styled.div`
  //6rem is height of navbar
  margin-top: ${({ theme }) => `calc(6rem + ${theme.spacer[10]})`};
`;
