import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Skeleton,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const LoginButton = (): JSX.Element => {
  return <NavigationMenuButton title="로그인" href="/login" />;
};

const LogoutButton = (): JSX.Element => {
  return <NavigationMenuButton title="로그아웃" onClick={signOut} />;
};

type NavigationMenuProps = {
  title: string;
  href?: string;
  icon?: JSX.Element;
  onClick?: () => void;
};

const NavigationMenuButton = ({
  icon,
  title,
  href,
  onClick,
}: NavigationMenuProps): JSX.Element => {
  const buttonComponent = (
    <Button color="inherit" startIcon={icon} onClick={onClick}>
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
  const { status } = useSession();

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
        {status === 'loading' && (
          <Skeleton sx={{ bgcolor: 'green.800' }} width={70} height={50} />
        )}
        {status === 'authenticated' && <LogoutButton />}
        {status === 'unauthenticated' && <LoginButton />}
      </Toolbar>
    </AppBar>
  );
}
