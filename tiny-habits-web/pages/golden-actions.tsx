import {
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import _ from 'lodash';

const SAMPLE_ASPIRATIONS = [
  '숙면',
  '체중 감량',
  '스트레스 줄이기',
  '휴대전화 사용 줄이기',
];

const AspirationInputPage = (): JSX.Element => {
  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{ paddingTop: 4, paddingX: { xs: 5, lg: 20 } }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={800} textAlign="center">
            나의 황금 행동 찾기
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
            marginY={20}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            {_.map(SAMPLE_ASPIRATIONS, (aspiration) => {
              return (
                <Chip
                  key={aspiration}
                  label={aspiration}
                  color="primary"
                  sx={{ cursor: 'pointer' }}
                />
              );
            })}
          </Stack>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          rowSpacing={2}
        >
          <Grid item xs={12} md={11}>
            <TextField
              label="이루고자 하는 열망 또는 결과를 적어주세요"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1} px={{ xs: 0, md: 2 }}>
            <Button fullWidth variant="contained">
              등록
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          display="flex"
          xs={12}
        >
          <InfoIcon sx={{ marginRight: 2 }} />
          <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
            열망은 명확할수록 좋아요
            <br />
            생각에 충분한 시간을 쓰셔도 좋고, 일단 쓰고 나중에 바꿔도 됩니다
          </Typography>
        </Grid>
      </Grid>
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
