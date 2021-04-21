import React from "react";
import styled from "styled-components";

import { Flex } from "../bases/Flex";

import ExpandMore from "../../static/icons/expand-more.svg";
import LeftArrow from "../../static/icons/arrow-west.svg";

const LocationTitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.base};
`;
const Location = styled.span`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: bold;

  span {
    margin-right: ${({ theme }) => theme.spacer[4]};
  }
`;
const Wrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacer[6]};
`;

export const LocationBar: React.FC<{ location: string }> = ({ location }) => {
  return (
    <Flex>
      <LeftArrow />
      <Wrapper>
        <LocationTitle>Alamat Pengiriman</LocationTitle>
        <Location>
          <span>{location}</span>
          <ExpandMore />
        </Location>
      </Wrapper>
    </Flex>
  );
};
