import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

export function NavigationBar(): JSX.Element {
  return (
    <AppBar position="sticky">
      <Toolbar className="flex">
        <Typography className="flex-grow px-3" variant="h6" color="inherit">
          '습'
        </Typography>
        <Button variant="contained" color="primary" disableElevation={true}>
          로그인
        </Button>
      </Toolbar>
    </AppBar>
  );
}
