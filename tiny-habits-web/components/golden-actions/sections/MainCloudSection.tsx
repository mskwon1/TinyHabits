import { Box, Button, Grid, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import _ from 'lodash';

const ActionButton = (props: { name: string }): JSX.Element => {
  const { name } = props;

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ padding: 2 }}
      >
        {name}
      </Button>
    </>
  );
};

const MainCloudSection = (): JSX.Element => {
  const { watch } = useFormContext<GoldenActionInputs>();

  const currentActions = watch('actions');

  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          display="flex"
          flexDirection="column"
          rowGap={2}
          justifyContent="center"
          alignItems="start"
        >
          {_.size(currentActions) > 0 &&
            _.map(_.slice(currentActions, 0, 5), (action) => {
              return <ActionButton name={action.name} />;
            })}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box textAlign="center" position="relative" flexGrow={1}>
            <img src="/images/cloud.png" width={300} alt="cloud" />
            <Box
              position="absolute"
              top={20}
              left={0}
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
            >
              <Typography
                variant="h5"
                fontSize={18}
                fontWeight={600}
                flexGrow={1}
              >
                {watch('aspiration')}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          display="flex"
          flexDirection="column"
          rowGap={2}
          justifyContent="center"
          alignItems="start"
        >
          {_.size(currentActions) > 0 &&
            _.map(_.slice(currentActions, 5), (action) => {
              return <ActionButton name={action.name} />;
            })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainCloudSection;
