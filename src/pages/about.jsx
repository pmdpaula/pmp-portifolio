import Square from '../components/commons/Square/index';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';
import Box from '../foundation/layout/Box';
import Grid from '../foundation/layout/Grid';
import Text from '../foundation/Text';

const AboutPage = () => (
  // const { colors, title, defaultStyles } = useContext(ThemeContext);

  <>
    <Box
      flex={1}
      display="flex"
      // flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid.Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex={1}
        style={{ zIndex: 50 }}
      >
        <Square value={({ sm: 12 }, { md: 9 })} offset={{ md: 1 }}>
          <Text tag="p" variant="title">
            Olá, sou o Pedro 👨
          </Text>
          <Text tag="p" variant="subTitle">
            Aqui vai um pouco do meu resumo profissional.
          </Text>
          <Text tag="p" variant="paragraph1" textAlign="justify">
            Tenho minha carreira toda voltada para área de TI. Desde o segundo
            grau técnico em processamento de dados, a graduação em informática e
            uma pós-graduação em gestão (MBA) de banco de dados Oracle 🎓. Além
            de diversos cursos e auto estudo. Fora da informática gosto de
            estudos sociais e ambientais. Astronomia é outro algo que me diverte
            também. Passarei aqui um resumo do que sou profissionalmente.
          </Text>
        </Square>
        <Square value={({ sm: 12 }, { md: 9 })} offset={{ md: 1 }}>
          <Text tag="p" variant="subTitle">
            Aqui vai o resumo 📃
          </Text>
          <Text tag="p" variant="paragraph1" textAlign="justify">
            {'  '}
            Trabalhei boa parte da minha vida com infraestrutura de TI. Trabalho
            que ainda faço e gosto, sou DBA Oracle e PostgreSQL. Nos lugares que
            passei tive oportunidades de desenvolver projetos paralelos,
            pricipalmente para o apoio do trabalho que fazia com infra. Desenvi
            diversos scripts e aplicações em shell scripts. Entre um tempo e
            outro livre dentro do trabalho, tive oportunidade de desenvolver uma
            aplicação web (foi em ASP) e com isso comecei o gosto pela coisa.
            Trabalho atualmente no Tribunal Regional do Trabalho da 1ª Região e
            venho desempenhando um cargo especializado em tecnologia de
            informação. Aqui passei na admministração da infra de sistemas Linux
            e JBoss (Java). Atualmente atuo como DBA. Meu forte conhecimento de
            shell script me permitiu desenvolver projetos para clonagens de
            bancos de dados, verificações de disponibilidades e integração de
            aplicações. Ainda tive o prazer de desenvolver um projeto de uma
            aplicação web em PHP e Javascript. A acrescentar, tenho um bom
            raciocínio lógico o que acredito ser de grande valia no meu dia a
            dia. Além de gostar bastante do meu trabalho sou bem focado em
            desempenhá-lo da melhor maneira possível.
          </Text>
        </Square>
        <Square value={({ sm: 12 }, { md: 9 })} offset={{ md: 1 }}>
          <Text tag="p" variant="subTitle">
            O que tenho em mente 🤯
          </Text>
          <Text tag="ul" variant="paragraph1" textAlign="justify">
            <li>
              Resolvi focar meu aprendizado em desenvolvimento em Javascript,
              pricipalmente em React.
            </li>
            <li>
              Com este aprendizado procurarei colaborar com o desenvolvimento de
              aplicações abertas (open source), pois acredito que a colaboração
              de todos cria uma sociedade mais justa
            </li>
            <li>
              Outras coisas que me divertem são os amigos, os inimigos, um bom
              filme ou série, uma boa bebida, viagens, jogos e etc.
            </li>
            {/* </ul> */}
          </Text>
        </Square>
      </Grid.Container>
    </Box>
  </>
);

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
