import { Box, Button, Grid, Typography } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import _ from 'lodash';

const ActionButton = (props: {
  name: string;
  onDelete: () => void;
  deleteButtonPosition: 'left' | 'right';
}): JSX.Element => {
  const { name, onDelete, deleteButtonPosition } = props;

  const DeleteButton = (
    <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
      <CloseIcon
        sx={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: 5,
          padding: 0.5,
        }}
        onClick={onDelete}
      />
    </Box>
  );

  return (
    <Box display="flex" width="100%" columnGap={2}>
      {deleteButtonPosition === 'left' && <>{DeleteButton}</>}
      <Button
        variant="contained"
        color="secondary"
        disableFocusRipple
        disableRipple
        fullWidth
        sx={{ padding: 2 }}
      >
        {name}
      </Button>
      {deleteButtonPosition === 'right' && <>{DeleteButton}</>}
    </Box>
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
          {_.size(currentActions) > 0 &&
            _.map(_.slice(currentActions, 0, 5), (action, index) => {
              return (
                <ActionButton
                  name={action.name}
                  onDelete={() => remove(index)}
                  deleteButtonPosition="left"
                />
              );
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
          justifyContent="start"
          alignItems="center"
          paddingX={4}
        >
          {_.size(currentActions) > 0 &&
            _.map(_.slice(currentActions, 5), (action, index) => {
              return (
                <ActionButton
                  name={action.name}
                  onDelete={() => remove(index + 5)}
                  deleteButtonPosition="right"
                />
              );
            })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainCloudSection;
