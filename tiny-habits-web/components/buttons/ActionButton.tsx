import { Button } from '@mui/material';

const ActionButton = (props: {
  name: string;
  onClick?: () => void;
}): JSX.Element => {
  const { name, onClick } = props;

  return (
    <>
      <Button
        variant="contained"
        color="dark"
        disableFocusRipple
        disableRipple
        sx={{ padding: 2, width: 250 }}
        onClick={onClick}
      >
        {name}
      </Button>
    </>
  );
};

export default ActionButton;
