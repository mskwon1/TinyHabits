import { Box, Container, TextField, Typography } from '@material-ui/core';

const SignupPage: React.FC = () => {
  return (
    <Container>
      <Box component="form">
        <Typography variant="h5" component="h1" className="text-center">
          회원가입
        </Typography>
        <TextField id="name" label="이름" variant="outlined" className="mt-3" />
        <TextField
          id="email"
          label="이메일"
          variant="outlined"
          className="mt-3"
        />
        <TextField id="password" label="패스워드" variant="outlined" />
      </Box>
    </Container>
  );
};

export default SignupPage;
