import { Box, Button, Container, Typography } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import SignupForm from '@components/forms/SingupForm';
import useSignupForm from 'hooks/form-hooks/useSignupForm';

const SignupPage: React.FC = () => {
  const { formHandlers, inputProps, submitHandler } = useSignupForm();

  return (
    <Container>
      <Box component="form" sx={{ paddingTop: 5 }}>
        <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>
          회원가입
        </Typography>
        <Container
          maxWidth="xs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <FormProvider {...formHandlers}>
            <SignupForm inputProps={inputProps} />
          </FormProvider>
          <Button
            variant="contained"
            size="large"
            sx={{ marginTop: 5 }}
            onClick={submitHandler}
          >
            회원가입 하기
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default SignupPage;
