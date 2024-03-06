import { LinkStyled } from './styled';

const BackLink = ({ children, to }) => {
  return <LinkStyled to={to}>{children}</LinkStyled>;
};

export default BackLink;
