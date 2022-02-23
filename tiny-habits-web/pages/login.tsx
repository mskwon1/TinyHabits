import { Box, Button, Container } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import KeyIcon from '@mui/icons-material/Key';
import LoginForm from '@components/forms/LoginForm';
import useLoginForm from 'hooks/form-hooks/useLoginForm';

const LoginPage: React.FC = () => {
  const { formHandlers, inputProps, submitHandler } = useLoginForm();

  return (
    <Container>
      <Box component="form" sx={{ paddingTop: 5 }}>
        <Container
          maxWidth="xs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}
        >
          <FormProvider {...formHandlers}>
            <LoginForm inputProps={inputProps} />
          </FormProvider>
          <Button
            variant="contained"
            size="large"
            sx={{ marginTop: 5 }}
            onClick={submitHandler}
            endIcon={<KeyIcon />}
          >
            로그인
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default LoginPage;
