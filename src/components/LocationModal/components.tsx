import styled from "styled-components";

export const Modal = styled.section`
  bottom: 0;
  box-sizing: border-box;
  background: #fff;
  left: 0;
  height: 75%;
  position: fixed;
  padding: ${({ theme }) => theme.spacer[6]};
  //375 is container width
  //40 is padding on both sides
  width: calc(375px + 40px);
`;

export const ModalTitle = styled.h2``;

export const InputWrapper = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 4px;
  display: flex;

  input {
    border: none;
    font-size: ${({ theme }) => theme.fontSize.big};
    outline: none;
    width: 100%;
  }

  svg {
    color: ${({ theme }) => theme.color.primary};
    fill: currentColor;
    padding: ${({ theme }) => theme.spacer[2]};
  }
`;

export const Suggestion = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${({ theme }) => theme.spacer[4]};
  padding-bottom: ${({ theme }) => theme.spacer[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgrey};

  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
  }

  span {
    padding: ${({ theme }) => theme.spacer[4]};
  }

  svg {
    background: ${({ theme }) => theme.color.lightgrey};
    border-radius: 50%;
    color: ${({ theme }) => theme.color.grey};
    fill: currentColor;
    padding: ${({ theme }) => theme.spacer[2]};
  }
`;
