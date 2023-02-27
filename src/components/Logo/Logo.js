import Link from "next/link";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

const Logo = ({ color, ...delegated }) => {
  return (
    <LogoLink href="/">
      <Wrapper color={color} {...delegated}>
        Muslim Space
      </Wrapper>
    </LogoLink>
  );
};

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
  color: var(--color-primary-700);
`;

export default Logo;
