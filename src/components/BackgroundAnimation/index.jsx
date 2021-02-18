import styled, { css } from 'styled-components'
import Anime, {anime} from 'react-anime';

// https://www.youtube.com/watch?v=XMhHEVznWEY

// const ContainerStyle = css``
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
`

const Block = styled.div`
  position: absolute;
  width: 50px;
  height: 100px;
  background: ${({ theme }) => theme.colors.background.main.color};
  box-shadow: 10px 10px 30px rgba(0,0,0,0.7);
`

const BackgroundAnimation = (props) => {
  const blocksArray = []

  for (var i = 0; i < 100; i++) {

    blocksArray.push(
      <Block key={`block_${i}`} />
    )
  }

  return (
    <Container>
      <Anime
        opacity={[0, 1]}
        easing="easeOutBack"
        duration={4000}
        direction="alternate"
        loop={true}
        // delay={anime.stagger(10)}
        delay={(el, index) => index * 30}
        scale={[1, 5]}
        translateX={() => {
          return anime.random(-700, 700)
        }}
        translateY={() => {
          return anime.random(-200, 200)
        }}
        // rotate={anime.stagger([-360, 360])}
      >
        {blocksArray}
    </Anime>
    </Container>
  )
}

export default BackgroundAnimation;

