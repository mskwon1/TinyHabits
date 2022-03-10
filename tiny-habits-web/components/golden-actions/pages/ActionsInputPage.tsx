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
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { useCallback } from 'react';
import MainCloudSection from '../sections/MainCloudSection';

const SAMPLE_ASPIRATIONS = [
  '숙면',
  '체중 감량',
  '스트레스 줄이기',
  '휴대전화 사용 줄이기',
];

const HelpSection = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pb={4}>
      <InfoIcon sx={{ marginRight: 2 }} />
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        열망은 명확할수록 좋아요
        <br />
        생각에 충분한 시간을 쓰셔도 좋고, 일단 쓰고 나중에 바꿔도 됩니다
      </Typography>
    </Box>
  );
};

const TitleSection = (): JSX.Element => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={800} textAlign="center">
        나의 황금 행동 찾기
      </Typography>
    </Box>
  );
};

const ActionsFormSection = (): JSX.Element => {
  const { register } = useFormContext<Pick<GoldenActionInputs, 'actions'>>();

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
      >
        <Grid item xs={12} md={11}>
          <TextField
            label="열망/결과를 이루기 위해서 어떤 행동을 해야 할까요?"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={1} px={{ xs: 0, md: 2 }}>
          <Button fullWidth variant="contained">
            확인
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const ActionsInputPage = (): JSX.Element => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ paddingTop: 4, paddingX: { xs: 5, lg: 20 } }}
        height="calc(100vh - 64px)"
        rowGap={4}
      >
        <TitleSection />
        <MainCloudSection />
        <ActionsFormSection />
        <HelpSection />
      </Box>
    </>
  );
};

export default ActionsInputPage;
