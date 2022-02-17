import { AppBar, Toolbar, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';

const LoginButton = (): JSX.Element => {
  return <NavigationMenuButton title="로그인" />;
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
        title="습관 버리기"
        href="/remove-habits"
        icon={<DeleteIcon style={{ color: 'black' }} />}
      />
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
    <AppBar className="px-3" position="sticky" color="primary">
      <Toolbar className="flex justify-between">
        <Link href="/">
          <div className="px-3 text-xl font-bold cursor-pointer">'습'</div>
        </Link>
        <div className="flex flex-grow justify-start space-x-2 mx-5">
          <NavigationMenus />
        </div>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
}
