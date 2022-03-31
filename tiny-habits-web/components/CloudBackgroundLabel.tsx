import { Box, Typography } from '@mui/material';

const CloudBackgroundLabel = (props: { label: string }): JSX.Element => {
  const { label } = props;

  return (
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
        <Typography variant="h5" fontSize={18} fontWeight={600} flexGrow={1}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default CloudBackgroundLabel;
