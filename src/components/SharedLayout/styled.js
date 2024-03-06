import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 20px;
  box-shadow: 0px 25px 20px -25px rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 1.5em;

  &.active {
    color: red;
  }
`;

export const MainStyled = styled.main`
  position: relative;
`;
