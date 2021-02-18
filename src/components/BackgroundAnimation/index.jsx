import styled, { css } from 'styled-components';
import Anime, { anime } from 'react-anime';
import { PropTypes } from 'prop-types';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

// https://www.youtube.com/watch?v=XMhHEVznWEY
const BackgroundAnimation = ({ numberOfBlocks, duration, direction, loop }) => {
  const blocksArray = [];

  for (let i = 0; i < numberOfBlocks; i += 1) {
    blocksArray.push(<Block key={`block_${i}`} />);
  }

  return (
    <Container>
      <Anime
        opacity={[0, 1]}
        easing="linear"
        duration={duration}
        direction={direction}
        loop={loop}
        // delay={anime.stagger(10)}
        delay={(el, index) => index * 30}
        scale={[1, 5]}
        translateX={() => anime.random(-500, 500)}
        translateY={() => anime.random(-200, 200)}
        // rotate={anime.stagger([-360, 360])}
      >
        {blocksArray}
      </Anime>
    </Container>
  );
};

export default BackgroundAnimation;

BackgroundAnimation.propTypes = {
  numberOfBlocks: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['normal', 'reverse', 'alternate']).isRequired,
  loop: PropTypes.bool.isRequired,
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* opacity: 0; */
`;

const Block = styled.div`
  position: absolute;

  ${breakpointsMedia({
    xs: css`
      width: 20px;
      height: 40px;
    `,
    md: css`
      width: 50px;
      height: 100px;
    `,
  })}

  background: ${({ theme }) => theme.colors.background.main.color};
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.7);
`;
