import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

const LoginButton = (): JSX.Element => {
  return <NavigationMenuButton title="로그인" href="/login" />;
};

type NavigationMenuProps = {
  title: string;
  href?: string;
  className?: string;
  icon?: JSX.Element;
};

const NavigationMenuButton = ({
  icon,
  title,
  className,
  href,
}: NavigationMenuProps): JSX.Element => {
  const buttonComponent = (
    <Button
      color="inherit"
      className={`focus:outline-none  ${className}`}
      startIcon={icon}
    >
      {title}
    </Button>
  );

  if (href) {
    return <Link href={href}>{buttonComponent}</Link>;
  }

  return buttonComponent;
};

const NavigationMenus = (): JSX.Element => {
  return (
    <>
      <NavigationMenuButton
        title="황금행동 찾기"
        href="/golden-habits"
        icon={<StarIcon style={{ color: 'gold' }} />}
      />
      {/* <NavigationMenu title="메뉴 3" /> */}
      {/* <NavigationMenu title="메뉴 4" /> */}
    </>
  );
};

export function NavigationBar(): JSX.Element {
  return (
    <AppBar position="sticky" color="primary" sx={{ paddingX: 1 }}>
      <Toolbar sx={{ flex: 1, justifyContent: 'space-between' }}>
        <Link href="/">
          <Typography
            variant="h5"
            px={3}
            fontWeight={600}
            style={{ cursor: 'pointer' }}
          >
            TinyHabits
          </Typography>
        </Link>
        <Box flex={1} flexGrow={1} mx={5}>
          <NavigationMenus />
        </Box>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
}
