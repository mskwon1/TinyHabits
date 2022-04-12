import { Grid, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import _ from 'lodash';
import AutoFixNormal from '@mui/icons-material/AutoFixNormal';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useCallback } from 'react';
import ActionButton from '@components/buttons/ActionButton';
import CloudBackgroundLabel from '@components/CloudBackgroundLabel';
import DeleteCircleButton from '@components/buttons/DeleteCircleButton';
import { GOLDEN_ACTION_STEPS } from '@constants';
import { useRouter } from 'next/router';

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
  const router = useRouter();

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

  const onConfirm = useCallback(() => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, step: GOLDEN_ACTION_STEPS.SELECT_EFFECTIVE },
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
            label="열망/결과를 이루기 위해서 어떤 행동을 해야 할까요?"
            fullWidth
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                onAddAction();
              }
            }}
            {...register('actionTextInput')}
          />
        </Grid>
        <Grid item xs={12} md={1} px={{ xs: 0, md: 2 }}>
          <Button fullWidth variant="contained" onClick={onConfirm}>
            다음
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const ActionsWrapper: React.FC = ({ children }) => {
  return (
    <Grid
      item
      xs={12}
      lg={4}
      display="flex"
      flexDirection="column"
      rowGap={2}
      justifyContent="start"
      alignItems="center"
      paddingX={4}
    >
      {children}
    </Grid>
  );
};

const MainCloudSection = (): JSX.Element => {
  const { watch, control } = useFormContext<GoldenActionInputs>();

  const { remove } = useFieldArray<GoldenActionInputs>({
    name: 'actions',
  });

  const currentActions = watch('actions');

  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container>
        <ActionsWrapper>
          {_.size(currentActions) > 0 &&
            _.map(_.slice(currentActions, 0, 5), (action, index) => {
              return (
                <Box
                  display="flex"
                  width="100%"
                  alignItems="center"
                  justifyContent="end"
                  columnGap={2}
                >
                  <DeleteCircleButton onClick={() => remove(index)} />
                  <ActionButton name={action.name} />
                </Box>
              );
            })}
        </ActionsWrapper>
        <Grid item xs={12} lg={4}>
          <CloudBackgroundLabel label={watch('aspiration')} />
        </Grid>
        <ActionsWrapper>
          {_.size(currentActions) > 0 &&
            _.map(_.slice(currentActions, 5), (action, index) => {
              return (
                <Box
                  display="flex"
                  width="100%"
                  alignItems="center"
                  justifyContent="start"
                  columnGap={2}
                >
                  <ActionButton name={action.name} />
                  <DeleteCircleButton onClick={() => remove(index + 5)} />
                </Box>
              );
            })}
        </ActionsWrapper>
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
