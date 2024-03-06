import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLayoutStyled = styled.div`
  display: flex;
  gap: 30px;
`;

export const PosterStyled = styled.img`
  height: 500px;
`;

export const MovieInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LinkStyled = styled(Link)`
  &:hover,
  &:focus {
    color: red;
  }
`;
