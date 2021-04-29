import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import Box from '../../../foundation/layout/Box';
import Grid from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import errorAnimation from './animations/error.json';
import okAnimation from './animations/ok.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    usuario: 'pedro01',
    nome: 'Pedro de Paula',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid =
    userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  // const throwDiceSubmit = () => {
  //   const myDice = Math.floor(Math.random() * 2);
  //   if (myDice > 0) {
  //     return setSubmissionStatus(formStates.DONE);
  //   }

  //   return setSubmissionStatus(formStates.ERROR);
  // };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        setIsFormSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.usuario,
          name: userInfo.nome,
        };

        // throwDiceSubmit();

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then(respostaDoServidor => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then(respostaConvertidaEmObjeto => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch(error => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Acompanhe as novidades!
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Cadastre-se para receber as novidades dos projetos desenvolvidos por
        mim.
      </Text>

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: okAnimation,
              loop: true,
              autoplay: true,
            }}
          />
          {/* https://lottiefiles.com/40762-check-mark-yes */}
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: errorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
          {/* https://lottiefiles.com/40763-check-mark-no */}
        </Box>
      )}
    </form>
  );
}

const FormCadastro = ({ propsDoModal }) => {
  const { defaultStyles, colors } = useContext(ThemeContext);

  return (
    <Grid.RowModal marginLeft={0} marginRight={0} flex={1}>
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 11, md: 8, lg: 6 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor={colors.background.secondary.color}
          style={{
            padding: '2em',
            borderRadius: `${defaultStyles.borderRadius}`,
            boxShadow: `${defaultStyles.boxShadow}`,
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.RowModal>
  );
};

export default FormCadastro;

FormCadastro.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  propsDoModal: PropTypes.any.isRequired,
};
