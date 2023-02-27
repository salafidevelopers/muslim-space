import styled from "styled-components";

import { QUERIES } from "../../constants";
import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Find Anything in
        <Location>
          <Icon id="map" strokeWidth={1} size={20} />
          <span>Nigeria</span>
        </Location>
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="heart" strokeWidth={1} />
      </UnstyledButton>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--color-gray-300);
  background-color: var(--color-gray-900);
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MarketingMessage = styled.p`
  color: var(--color-white);
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Location = styled(UnstyledButton)`
  background: var(--color-gray-500);
  padding: 5px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
