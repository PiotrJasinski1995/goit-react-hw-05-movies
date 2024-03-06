import PropTypes from 'prop-types';
import { SmallSectionStyled, SmallTitleStyled } from './styled';

const SmallSection = ({ title = null, children }) => {
  return (
    <SmallSectionStyled>
      {title && <SmallTitleStyled>{title}</SmallTitleStyled>}
      {children}
    </SmallSectionStyled>
  );
};

SmallSection.propTypes = {
  title: PropTypes.string,
};

export default SmallSection;
