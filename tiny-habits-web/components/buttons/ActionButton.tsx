import { Box, Button } from '@mui/material';

const ActionButton = (props: {
  name: string;
  onClick?: () => void;
  leftSection?: JSX.Element;
  rightSection?: JSX.Element;
}): JSX.Element => {
  const { name, onClick, leftSection, rightSection } = props;

  return (
    <Box display="flex" width="100%" alignItems="center" columnGap={2}>
      {leftSection}
      <Button
        variant="contained"
        color="dark"
        disableFocusRipple
        disableRipple
        fullWidth
        sx={{ padding: 2 }}
        onClick={onClick}
      >
        {name}
      </Button>
      {rightSection}
    </Box>
  );
};

export default ActionButton;
