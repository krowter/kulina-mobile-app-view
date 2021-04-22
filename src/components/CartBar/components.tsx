import styled from "styled-components";

export const CartBar = styled.section`
  align-items: center;
  background: ${({ theme }) => theme.color.secondary};
  bottom: ${({ theme }) => theme.spacer[4]};
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacer[6]};
  position: fixed;
  //375 is container width
  width: calc(375px + ${({ theme }) => theme.spacer[4]});
  left: ${({ theme }) => theme.spacer[6]};
  * {
    color: #fff;
  }
`;

export const CartUnderLayer = styled.div`
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  bottom: 0;
  content: "";
  height: 10rem;
  left: 0;
  transform: translateZ(-1px);
  position: fixed;
  width: calc(375px + 40px);
`;

export const PriceInfo = styled.div`
  font-weight: bold;
`;

export const ShippingCost = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
`;
