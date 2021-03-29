import { useContext } from 'react';

import Link from '../../components/commons/Link';
import LoginForm from '../../components/patterns/LoginForm/index';
import { WebsitePageContext } from '../../components/wrappers/WebsitePage';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';
import Box from '../../foundation/layout/Box/index';
import Grid from '../../foundation/layout/Grid/index';
import Text from '../../foundation/Text/index';
import Logo from '../../theme/Logo';

function LoginScreen() {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <Grid.Container display="flex" flex="1" alignItems="center" zIndex={500}>
      <Grid.Row flex="1" alignItems="center" justifyContent="center">
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="37px"
            marginBottom="37px"
          >
            <Link href="/" color="secondary.main">
              <Logo size="large" />
            </Link>
          </Box>
          <LoginForm />
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign="center"
          >
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.main"
              onClick={event => {
                event.preventDefault();
                websitePageContext.toggleModalCadastro();
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box display="flex" justifyContent="center">
            <img
              align="middle"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
  },
});
