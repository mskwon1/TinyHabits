import { Box, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const MainCloudSection = (): JSX.Element => {
  const { watch } = useFormContext<Pick<GoldenActionInputs, 'aspiration'>>();

  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center" position="relative">
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
            {watch('aspiration')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainCloudSection;
