import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

export interface NavigationBarProps {
  isLoggedIn?: boolean;
}

export function NavigationBar(props: NavigationBarProps): JSX.Element {
  const { isLoggedIn } = props;
  return (
    <AppBar>
      <Toolbar className="flex">
        <Typography className="flex-grow pr-3" variant="h6" color="inherit">
          '습'
        </Typography>
        <Button variant="contained" color="primary" disableElevation={true}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
