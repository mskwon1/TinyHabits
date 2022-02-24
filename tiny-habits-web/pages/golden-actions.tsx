import { Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AspirationInputPage = (): JSX.Element => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <Typography variant="h5" fontWeight={800}>
          나의 황금 행동 찾기
        </Typography>
        <Box
          style={{
            backgroundImage: 'url("/images/cloud.png")',
            backgroundPosition: 'center',
            backgroundSize: 300,
            backgroundRepeat: 'no-repeat',
          }}
          width="100%"
          height={300}
          position="relative"
          marginY={30}
        />
        <Box width="100%" flex={1} justifyContent="center" textAlign="center">
          <TextField
            label="이루고자 하는 열망 또는 결과를 적어주세요"
            sx={{ width: 300 }}
          />
        </Box>
      </Container>
    </>
  );
};

const GoldenActionsPage = (): JSX.Element => {
  return (
    <>
      <AspirationInputPage />
    </>
  );
};

export default GoldenActionsPage;
