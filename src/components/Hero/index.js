import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHTS } from "../../constants";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <Headline>Welcome to the Muslim Space!</Headline>
        <SubHeadline>
          Buy your products and services from trustworthy Muslims around you
          anywhere in the world.
        </SubHeadline>
      </div>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  background: linear-gradient(
      0deg,
      rgba(217, 217, 217, 0.4),
      rgba(217, 217, 217, 0.4)
    ),
    url("/logo-image.png"), url("/bg-image.png");
  text-align: center;
  padding: 3rem 8rem;
  background-size: cover, contain, cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 2rem 6rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 2rem 4rem;
  }
`;

const Headline = styled.h2`
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #c89850;

  @media ${QUERIES.tabletAndSmaller} {
    font-size: 3.5rem;
  }
  /* text-outline: 1.19492px solid #000000; */
`;

const SubHeadline = styled.h4`
  font-weight: ${WEIGHTS.medium};
  font-size: 2rem;
  text-align: center;
  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.5rem;
  }
`;
