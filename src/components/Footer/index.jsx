import styled from 'styled-components';

const footerHeight = 80;

const FooterWrapper = styled.footer`
  padding: 14px 28px;
  margin: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  /* height: ${footerHeight}px; */
  /* height: 50px; */
  /* min-width: 95vw; */
  background: ${({ theme }) => theme.colors.background.secondary.color};
  opacity: 0.8;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  /* align-self: flex-end; */
  /* flex-shrink: 0; */

  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        o
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
