import styled from "styled-components";
import { useState } from "react";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <Menu>
            <MenuButton as={NavLink}>
              Products <span aria-hidden="true">▾</span>
            </MenuButton>
            <List>
              <Item as={Link} href={"/"} onSelect={() => {}}>
                Fashion
              </Item>
              <Item as={Link} href={"/"} onSelect={() => {}}>
                Vehicles
              </Item>
              <Item as={Link} href={"/"} onSelect={() => {}}>
                Property
              </Item>
              <Item as={Link} href={"/"} onSelect={() => {}}>
                Health
              </Item>
              <Item as={Link} href={"/"} onSelect={() => {}}>
                Gadgets
              </Item>
              <Item as={Link} href={"/"} onSelect={() => {}}>
                Electronics
              </Item>
              <Item as={Link} href={"/"} onSelect={() => {}}>
                Agriculture and Foods
              </Item>
            </List>
          </Menu>
          <Menu>
            <MenuButton as={NavLink}>
              Services and Handywork <span aria-hidden="true">▾</span>
            </MenuButton>
            <List>
              <Item onSelect={() => {}}>Leather Works</Item>
              <Item onSelect={() => {}}>Computer and I.T Services</Item>
              <Item onSelect={() => {}}>Cleaning Services</Item>
              <Item onSelect={() => {}}>Child Care and Education</Item>
            </List>
          </Menu>
        </DesktopNav>
        <DesktopActions>
          <UnstyledButton>
            Sign Up
            <VisuallyHidden>Sign Up</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            Sign In
            <VisuallyHidden>Sign In</VisuallyHidden>
          </UnstyledButton>
          <Sell>
            Sell
            <VisuallyHidden>Sell</VisuallyHidden>
          </Sell>
        </DesktopActions>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const NavLink = styled.div`
  font-size: 1.1rem;
  text-transform: capitalize;
  text-decoration: none;
  color: var(--color-gray-900);
  /* font-weight: ${WEIGHTS.medium}; */
  cursor: pointer;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const List = styled(MenuList)`
  background-color: var(--color-white);
  padding: 1rem;
  color: white;
  box-shadow: 12px 8px 3px -3px rgba(227, 217, 217, 0.75);
`;

const Item = styled(MenuItem)`
  font-size: 1.05rem;
  color: var(--color-gray-700);
  display: block;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: var(--color-gray-900);
  }
`;

const Filler = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const DesktopActions = styled.div`
  flex: 1;
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  justify-content: flex-end;
  font-size: 1.2rem;
  font-weight: ${WEIGHTS.medium};

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Sell = styled(UnstyledButton)`
  background-color: var(--color-primary);
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
`;

export default Header;
