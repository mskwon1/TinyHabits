import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

type HelpAndActionSectionProps = {
  helpText: string;
  onActionClick: () => void;
  actionText: string;
};

const HelpAndActionSection = ({
  helpText,
  actionText,
  onActionClick,
}: HelpAndActionSectionProps): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" pb={4}>
      <Box display="flex" alignItems="center" columnGap={2} mr={10}>
        <CheckCircleOutline sx={{ display: 'inline-block' }} />
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {helpText}
        </Typography>
      </Box>
      <Button variant="contained" onClick={onActionClick}>
        {actionText}
      </Button>
    </Box>
  );
};

export default HelpAndActionSection;
