import styled from 'styled-components'
import {Text} from '../../foundation/Text';

const NavbarStyled = styled.header`
  width: 100%;
  min-height: 20vh;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f1f04;
  transition: all 0.7s ease-in;
`

const Navbar = () => {
  return (

    <NavbarStyled>

      <Text className="logo">Meu Portifólio</Text>


      <nav className="navigation">
            <ul>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Home</a></li>
              <li><a href="#post3">Home</a></li>
              <li><a href="#post4">Home</a></li>
            </ul>
        </nav>

    </NavbarStyled>

  )

}

export default Navbar
