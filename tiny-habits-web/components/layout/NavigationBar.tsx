import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

export function NavigationBar(): JSX.Element {
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar className="flex">
        <div className="flex-grow px-3 text-xl">'습'</div>
        <Button variant="contained" color="primary" disableElevation={true}>
          로그인
        </Button>
      </Toolbar>
    </AppBar>
  );
}
