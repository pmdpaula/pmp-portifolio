import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Text from '../../../foundation/Text/index';

const SquareWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background.secondary.color};
  border-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  box-shadow: ${({ theme }) => theme.defaultStyles.boxShadow};
  backdrop-filter: blur(15px);
  margin-top: 4em;
  width: 45em;

  ul {
    list-style-type: none;
  }

  Button {
    margin-bottom: 0.5em;
  }
`;

const SquareHeader = styled.div`
  position: relative;
  width: 90%;
  top: -3em;
  left: 5%;
  border-top-left-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.defaultStyles.borderRadius};
  padding: 0.01em 1.5em;
  background: linear-gradient(
    180deg,
    #9ea7aa 0%,
    #9ea7aa 30%,
    rgba(255, 255, 255, 0) 98%
  );
`;

const SquareBody = styled.div`
  position: relative;
  top: -2em;
`;

const Square = ({ title, children }) => (
  <SquareWrapper>
    <SquareHeader>
      <Text tag="h1" variant="title" color="text.black">
        {title}
      </Text>
    </SquareHeader>
    <SquareBody>{children}</SquareBody>
  </SquareWrapper>
);

export default Square;

Square.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
