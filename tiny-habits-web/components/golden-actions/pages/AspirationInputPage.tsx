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
import { useRouter } from 'next/router';
import { GOLDEN_ACTION_STEPS } from '@constants';

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

const MainSection = (): JSX.Element => {
  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <img src="/images/cloud.png" width={300} alt="cloud" />
      </Box>
    </Box>
  );
};

const ExampleStackSection = (): JSX.Element => {
  const { setValue, setFocus } = useFormContext<{ aspiration: string }>();

  return (
    <Box>
      <Stack direction="row" rowGap={2} columnGap={2} flexWrap="wrap">
        {_.map(SAMPLE_ASPIRATIONS, (aspiration) => {
          return (
            <Chip
              key={aspiration}
              label={aspiration}
              color="primary"
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                setValue('aspiration', aspiration);
                setFocus('aspiration');
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

const AspirationFormSection = (): JSX.Element => {
  const router = useRouter();
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext<{ aspiration: string }>();

  const onConfirm = useCallback(() => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, step: GOLDEN_ACTION_STEPS.ACTIONS_INPUT },
      },
      undefined,
      { shallow: true }
    );
  }, [router]);

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
            label="이루고자 하는 열망 또는 결과를 적어주세요"
            fullWidth
            {...register('aspiration', { required: true })}
            error={!!errors.aspiration}
            helperText={errors.aspiration?.message}
            InputLabelProps={{ shrink: !_.isEmpty(watch('aspiration')) }}
          />
        </Grid>
        <Grid item xs={12} md={1} px={{ xs: 0, md: 2 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={onConfirm}
            disabled={_.isEmpty(watch('aspiration'))}
          >
            확인
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const AspirationInputPage = (): JSX.Element => {
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
        <MainSection />
        <ExampleStackSection />
        <AspirationFormSection />
        <HelpSection />
      </Box>
    </>
  );
};

export default AspirationInputPage;
