import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {
  HeaderStyled,
  NavStyled,
  NavLinkStyled,
  SharedLayoutMainStyled,
} from './styled';

const SharedLayout = () => {
  return (
    <div>
      <HeaderStyled>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NavStyled>
      </HeaderStyled>
      <SharedLayoutMainStyled>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SharedLayoutMainStyled>
    </div>
  );
};

export default SharedLayout;
