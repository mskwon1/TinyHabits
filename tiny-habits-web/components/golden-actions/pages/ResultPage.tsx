import { Grid, TextField, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import _ from 'lodash';
import AutoFixNormal from '@mui/icons-material/AutoFixNormal';
import { SubmitHandler, useFieldArray, useFormContext } from 'react-hook-form';
import { useCallback } from 'react';
import ActionButton from '@components/buttons/ActionButton';
import CloudBackgroundLabel from '@components/CloudBackgroundLabel';
import { useRouter } from 'next/router';
import StarIcon from '@mui/icons-material/Star';
import { GOLDEN_ACTION_STEPS } from '@constants';
import { CheckCircle, CheckCircleOutline } from '@mui/icons-material';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { createAspiration } from '@api/aspiration';
import { createAction } from '@api/action';
import { useSession } from 'next-auth/react';

const HelpSection = (): JSX.Element => {
  const { watch, handleSubmit } = useFormContext<GoldenActionInputs>();
  const router = useRouter();
  const { data: session } = useSession();

  const onConfirm = useCallback<SubmitHandler<GoldenActionInputs>>(
    async ({ actions, aspiration }) => {
      const selectedActions = _.filter(actions, (action) => {
        return action.isEasy && action.isEffective;
      });
      console.log({ selectedActions, aspiration });

      if (!session) {
        return;
      }

      const { accessToken } = session;
      if (!accessToken) {
        // TODO : feedback
        return;
      }

      const createdAspiration = await createAspiration(
        { name: aspiration },
        accessToken
      );
      const createdActions = await Promise.all(
        _.map(selectedActions, async (action) => {
          {
            return createAction(
              {
                name: action.name,
                aspirationId: createdAspiration.id,
              },
              accessToken
            );
          }
        })
      );

      console.log({ createdAspiration, createdActions });
    },
    [router, session]
  );

  return (
    <Box display="flex" justifyContent="center" alignItems="center" pb={4}>
      <Box display="flex" alignItems="center" columnGap={2} mr={10}>
        <AllInboxIcon sx={{ display: 'inline-block' }} />
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {watch('aspiration')}을(를) 위한 황금행동들을 찾았어요! 이제 이
          행동들을 어떻게 일상생활에 끼워넣을지 생각해볼까요?
        </Typography>
      </Box>
      <Button variant="contained" onClick={handleSubmit(onConfirm)}>
        확인
      </Button>
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
  const selectedActions = _.filter(currentActions, (action) => {
    return action.isEasy && action.isEffective;
  });
  const sliceIndex = _.size(selectedActions) / 2 + 1;

  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container>
        <ActionsWrapper>
          {_.map(_.slice(selectedActions, 0, sliceIndex), (action) => {
            return (
              <Box
                display="flex"
                width="100%"
                alignItems="center"
                justifyContent="start"
                columnGap={1}
              >
                <CheckCircleOutline width={24} sx={{ color: 'green' }} />
                <StarIcon width={24} sx={{ color: 'gold' }} />
                <ActionButton name={action.name} />
              </Box>
            );
          })}
        </ActionsWrapper>
        <Grid item xs={12} lg={4}>
          <CloudBackgroundLabel label={watch('aspiration')} />
        </Grid>
        <ActionsWrapper>
          {_.map(_.slice(selectedActions, sliceIndex), (action) => {
            return (
              <Box
                display="flex"
                width="100%"
                alignItems="center"
                justifyContent="start"
                columnGap={1}
              >
                <ActionButton name={action.name} />
                <CheckCircleOutline width={24} sx={{ color: 'green' }} />
                <StarIcon width={24} sx={{ color: 'gold' }} />
              </Box>
            );
          })}
        </ActionsWrapper>
      </Grid>
    </Box>
  );
};

const ResultPage = (): JSX.Element => {
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

export default ResultPage;
