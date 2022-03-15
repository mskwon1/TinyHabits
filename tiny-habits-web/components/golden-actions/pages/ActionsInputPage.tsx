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
import AutoFixNormal from '@mui/icons-material/AutoFixNormal';
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form';
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
      <AutoFixNormal sx={{ marginRight: 2 }} />
      <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
        당신에게 요술봉이 있고, 이 요술봉을 흔들어서 열망/결과가 이루기 위한
        행동을 말하면 그대로 이루어진다고 생각해보세요. 어떤 행동을 소원으로
        빌어볼까요?
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
  const { register, control, setValue, getValues } =
    useFormContext<GoldenActionInputs>();
  const { fields, append } = useFieldArray({ control, name: 'actions' });

  const onAddAction = useCallback(() => {
    if (_.size(getValues('actions')) >= 10) {
      // TODO : 피드백
      return;
    }

    append({
      name: getValues('actionTextInput'),
      isEasy: false,
      isEffective: false,
    });

    setValue('actionTextInput', '');
  }, []);

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
            {...register('actionTextInput')}
          />
        </Grid>
        <Grid item xs={12} md={1} px={{ xs: 0, md: 2 }}>
          <Button fullWidth variant="contained" onClick={onAddAction}>
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
