import styled from "styled-components";

export const Card = styled.article`
  background: #fff;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
  margin: ${({ theme }) => theme.spacer[6]} 0;

  & > img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    height: 16rem;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
`;

export const CardInfo = styled.div`
  padding: ${({ theme }) => theme.spacer[6]};
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.color.darkgrey};
  margin: ${({ theme }) => theme.spacer[2]} 0;
`;

export const RatingWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Flex = styled.div`
  color: ${({ theme }) => theme.color.darkgrey};
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
`;

export const CardFooter = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacer[6]};
  justify-content: space-between;
  width: 100%;
`;

export const AddToCardButton = styled.button`
  background: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.big};
  padding: ${({ theme }) => theme.spacer[4] + " " + theme.spacer[8]};
`;
