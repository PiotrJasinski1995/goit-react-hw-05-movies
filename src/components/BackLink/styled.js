import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  border: solid black 1px;
  border-radius: 5px;
  padding: 2px;

  &:hover {
    scale: 1.05;
    color: red;
  }
`;
