import { Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import _ from 'lodash';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useCallback } from 'react';
import ActionButton from '@components/buttons/ActionButton';
import CloudBackgroundLabel from '@components/CloudBackgroundLabel';
import { useRouter } from 'next/router';
import StarIcon from '@mui/icons-material/Star';
import { GOLDEN_ACTION_STEPS } from '@constants';
import HelpAndActionSection from '../sections/HelpAndActionSection';

const HelpSection = (): JSX.Element => {
  const router = useRouter();

  const onConfirm = useCallback(() => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, step: GOLDEN_ACTION_STEPS.SELECT_REALISTIC },
      },
      undefined,
      { shallow: true }
    );
  }, [router]);

  return (
    <HelpAndActionSection
      actionText="다음"
      onActionClick={onConfirm}
      helpText="열망/결과 달성에 매우 효과가 있으리라고 생각되는 행동 4~5개를 클릭해주세요. 행동의 실행 가능성, 또는 현실성은 고려하지 않으셔도 됩니다!"
    />
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
                  columnGap={2}
                >
                  {fields[index].isEffective && (
                    <StarIcon width={24} sx={{ color: 'gold' }} />
                  )}
                  <ActionButton
                    name={action.name}
                    onClick={() =>
                      update(index, {
                        ...fields[index],
                        isEffective: !fields[index].isEffective,
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
                  columnGap={2}
                >
                  <ActionButton
                    name={action.name}
                    onClick={() =>
                      update(index + 5, {
                        ...fields[index + 5],
                        isEffective: !fields[index + 5].isEffective,
                      })
                    }
                  />
                  {fields[index + 5].isEffective && (
                    <StarIcon width={24} sx={{ color: 'gold' }} />
                  )}
                </Box>
              );
            })}
        </ActionsWrapper>
      </Grid>
    </Box>
  );
};

const SelectEffectivePage = (): JSX.Element => {
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
        <HelpSection />
      </Box>
    </>
  );
};

export default SelectEffectivePage;
