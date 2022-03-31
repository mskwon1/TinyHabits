import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

const DeleteCircleButton = (props: { onClick: () => void }): JSX.Element => {
  const { onClick } = props;

  return (
    <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
      <CloseIcon
        sx={{
          backgroundColor: 'red',
          color: 'white',
          borderRadius: 5,
          padding: 0.5,
        }}
        onClick={onClick}
      />
    </Box>
  );
};

export default DeleteCircleButton;
