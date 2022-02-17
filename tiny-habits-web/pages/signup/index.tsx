import { Box, Container, TextField, Typography } from '@mui/material';

const SignupPage: React.FC = () => {
  return (
    <Container>
      <Box component="form" sx={{ paddingTop: 5 }}>
        <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>
          회원가입
        </Typography>
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <TextField
            id="name"
            label="이름"
            variant="outlined"
            fullWidth
            sx={{ marginTop: 5 }}
          />
          <TextField
            id="email"
            label="이메일"
            variant="outlined"
            fullWidth
            sx={{ marginTop: 5 }}
          />
          <TextField
            id="password"
            label="패스워드"
            variant="outlined"
            fullWidth
            sx={{ marginTop: 5 }}
          />
        </Container>
      </Box>
    </Container>
  );
};

export default SignupPage;
