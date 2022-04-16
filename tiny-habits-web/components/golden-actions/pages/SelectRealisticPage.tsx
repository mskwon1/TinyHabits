import { Grid, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import _ from 'lodash';
import AutoFixNormal from '@mui/icons-material/AutoFixNormal';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useCallback } from 'react';
import ActionButton from '@components/buttons/ActionButton';
import CloudBackgroundLabel from '@components/CloudBackgroundLabel';
import { useRouter } from 'next/router';
import StarIcon from '@mui/icons-material/Star';
import { GOLDEN_ACTION_STEPS } from '@constants';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';

const ConfirmButtonSection = (): JSX.Element => {
  const router = useRouter();

  const onConfirm = useCallback(() => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, step: GOLDEN_ACTION_STEPS.RESULT_AND_SAVE },
      },
      undefined,
      { shallow: true }
    );
  }, [router]);

  return (
    <Box display="flex" justifyContent="end">
      <Button variant="contained" onClick={onConfirm}>
        다음
      </Button>
    </Box>
  );
};

const HelpSection = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pb={4}>
      <Box display="flex" alignItems="center" columnGap={2}>
        <StarIcon sx={{ display: 'inline-block' }} />
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          실행 가능성이 높은 행동을 클릭해주세요. 어떻게 판단해야할지
          모르겠다면, “나는 이 행동을 하고싶은가”라고 자신에게 물어보세요!
        </Typography>
      </Box>
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

  const { remove, update, fields } = useFieldArray<GoldenActionInputs>({
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
                  columnGap={1}
                >
                  {fields[index].isEasy && (
                    <CheckCircleOutline width={24} sx={{ color: 'green' }} />
                  )}
                  {fields[index].isEffective && (
                    <StarIcon width={24} sx={{ color: 'gold' }} />
                  )}
                  <ActionButton
                    name={action.name}
                    onClick={() =>
                      update(index, {
                        ...fields[index],
                        isEasy: !fields[index].isEasy,
                      })
                    }
                  />
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
                  columnGap={1}
                >
                  <ActionButton
                    name={action.name}
                    onClick={() =>
                      update(index + 5, {
                        ...fields[index + 5],
                        isEasy: !fields[index + 5].isEasy,
                      })
                    }
                  />
                  {fields[index + 5].isEffective && (
                    <StarIcon width={24} sx={{ color: 'gold' }} />
                  )}
                  {fields[index + 5].isEasy && (
                    <CheckCircleOutline width={24} sx={{ color: 'green' }} />
                  )}
                </Box>
              );
            })}
        </ActionsWrapper>
      </Grid>
    </Box>
  );
};

const SelectRealisticPage = (): JSX.Element => {
  console.log('what');
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
        <ConfirmButtonSection />
        <HelpSection />
      </Box>
    </>
  );
};

export default SelectRealisticPage;
